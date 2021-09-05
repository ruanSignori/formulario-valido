
const cpf = document.querySelector('.cpf');




class FormValidation{
    constructor (){
        this.form = document.querySelector('form.form');
        console.log(this.form)
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.form)
    }

}

const validated = new FormValidation();