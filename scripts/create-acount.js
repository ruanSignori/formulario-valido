
class FormValidation{
    constructor (){
        this.form = document.querySelector('.form');
        this.events();
    }

    //Capturar o evento de tentativa de validação do formulário
    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.validFields();
        const passwordFieldsValid = this.validPassword();

        if (validFields && passwordFieldsValid) {
            alert('Formulário enviado')
            this.form.submit();
        }
    }

    validFields() {
        let valid = true;

        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let field of this.form.querySelectorAll('.valid')) {

            let placeholder = field.getAttribute('placeholder');

            if (!field.value) {
                this.error(field, `Campo "${placeholder}" não pode estar vazio.`);
                valid = false;
            }

            if (field.classList.contains('cpf')) {
                if (!this.validateCPF(field)) valid = false;
            }

            if (field.classList.contains('username')) {
                if (!this.validateUsername(field)) valid = false;
            }
        }

        return valid;
    }

    validPassword() {
        let valid = true; 

        const password = this.form.querySelector('.password');
        const repeatPassword = this.form.querySelector('.repeat-password');

        if (password.value !== repeatPassword.value) {
            valid = false;

            this.error(password, 'Campo "Senha" e "Confirmar senha" precisam ser iguais.');
            this.error(repeatPassword, 'Campo "Senha" e "Confirmar senha" precisam ser iguais.');
        }

        if (password.value.length > 6 || password.value.length > 16) valid = false;

        return valid;
    }

    validateUsername(field) {
        const user = field.value;

        let valid = true;

        if (user.length < 3 || user.length > 16) valid = false;

        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.error(field, `"Nome de usuário" precisa conter apenas letras e/ou números.`)
            valid = false;
        } 

        //Verificar no futuro banco de dados se já existe um usuário com esse nome

        return valid;
    }

    validateCPF(field) {
        const cpf = new ValidateCPF(field.value);

        if(!cpf.valid()) {
            this.error(field, 'CPF inválido');
        }

        return true;
    }

    error(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
    
}

const validated = new FormValidation();

/* 
    Atualizações: Colocar ponto no cpf de forma interativa
                    Animações
                    Arrumar o input senha
                    
*/
