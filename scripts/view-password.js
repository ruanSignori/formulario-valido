console.log('Código inicado em 04/09/2021');


const button_password = document.querySelector('.button-password');

button_password.addEventListener('click', e => {

    if (e.target === button_password) {
        let typeInput = document.querySelector('.password');

        const imgPassword = document.querySelector('.img-password');
        imgPassword.src = 'imagens/Senha-sem-traço.png'

        if (typeInput.type ==='password') {

            imgPassword.src = 'imagens/olho-senha.png'
            typeInput.type = 'text'
        } else typeInput.type = 'password';

    }

});