let cpf = document.querySelector('input.cpf');

class FormValidation{
    constructor (){
        this.form = document.querySelector('form.form');
        console.log(this.form)
        this.events();
    }

    //Capturar o evento de tentativa de validação do formulário
    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
            this.validFields()
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    validFields() {
        let valid = true;

        for (let errorTxt of this.form.querySelectorAll('.text-error')){
            errorTxt.remove();

            for (let field of this.form.querySelectorAll('.valid')){
                const placeholder = field.previousElementSibling.innerText;

                if(!field.value) {
                    this.error(field, `Campo ${placeholder} não pode estar vazio`)
                    console.log('ERROR')
                }
            }
        }
    }

    //Criar uma div embaixo daonde ocorreu o erro
    error (field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('text-error');
        field.insertAdjacentElement('afterend', div);
    }

}

const validated = new FormValidation();
