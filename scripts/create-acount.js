let cpf = document.querySelector('.cpf');
    
while(cpf.value.length >= 3) {
    console.log('opa');
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