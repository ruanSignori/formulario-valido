
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
        let valid = true;
        const cpf = new ValidateCPF(field.value);

        if(!cpf.valid()) {
            this.error(field, 'CPF inválido');
            return valid = false
        }

        return valid;
    }

    error(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.style.border = '1.5px solid red';
        field.insertAdjacentElement('afterend', div);
    }
    
}

const validated = new FormValidation();

/* 
    Atualizações: Colocar ponto no cpf de forma interativa
        Animações
        Arrumar o input senha
        mover o placeholder pra cima quando focado
                    
*/

/*
    Código feito em aula da Udemy
*/

class ValidateCPF{
    constructor(cpf){
        Object.defineProperty(this, 'cpfClear', {
            writable: false,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        });
    }

    isSequence() {
        return this.cpfClear.charAt(0).repeat(11) === this.cpfClear;
    }

    generateNewCPF() {
        const cpf9Digits = this.cpfClear.slice(0, -2);
        const firstDigit = ValidateCPF.gerateDigit(cpf9Digits);
        const secondDigit = ValidateCPF.gerateDigit(cpf9Digits + firstDigit);
        this.newCPF = cpf9Digits + firstDigit + secondDigit;
    }

    static gerateDigit(cpf9Digits) {
        let total = 0;
        let reverse = cpf9Digits.length + 1;

        for (let stringOfCPF of cpf9Digits) {
            total += reverse * Number(stringOfCPF);
            reverse --;
        }

        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }

    valid() {
        if (!this.cpfClear) return false;
        if (typeof this.cpfClear !== 'string') return false;
        if (this.cpfClear.length !== 11) return false;
        if (this.isSequence()) return false;
        this.generateNewCPF();
        
        return this.newCPF === this.cpfClear;
    }
}


const input_password = document.querySelector('.password');
const button = document.querySelector('.password-button');


input_password.addEventListener('focusin', function(){
    button.style.color = '#636363';
}); 

input_password.addEventListener('focusout', function(){
    button.style.color = '#ffffff';
});

button.addEventListener('click', function() {
    button.style.color = '#636363';
    if (input_password.type === 'password') {
        input_password.type = 'text';
        button.innerHTML = 'Ocultar'
    } else {
        input_password.type = 'password'
        button.innerHTML = 'Mostrar'
    }
});

/*
    Adicionar animação conforme tu digita o fundo laranja e rosa muda de cor
*/