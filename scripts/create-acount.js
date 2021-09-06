let cpf = document.querySelector('input.cpf');
console.log(cpf)

if(cpf.length === 3) {
    cpf.style.color = 'red';
}

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
    }

}

const validated = new FormValidation();