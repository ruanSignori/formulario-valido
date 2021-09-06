console.log('Código inicado em 04/09/2021');


const button_password = document.querySelector('.button-password');

button_password.addEventListener('click', e => {

    if (e.target === button_password) {
        let typeInput = document.querySelector('.password');
    
        if (typeInput.type ==='password') {
            typeInput.type = 'text'
        } else typeInput.type = 'password';

    }

});