console.log('Código inicado em 04/09/2021');


const button_password = document.querySelector('.button-password');

button_password.addEventListener('click', e => {

    if (e.target === button_password) {
        let typeInput = document.querySelector('.password');

        const imgPassword = document.querySelector('.img-password');
        imgPassword.src = 'imagens/eye.png';

        if (typeInput.type ==='password') {

            imgPassword.src = 'imagens/invisible.png';
            typeInput.type = 'text';

        } else typeInput.type = 'password';

    };
});