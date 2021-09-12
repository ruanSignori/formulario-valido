console.log('Código inicado em 04/09/2021');


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
