
class FormValidation{
    constructor (){
        this.form = document.querySelector('.form');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
        });
    }

    cpfFormat() {

    }
}

