//SCRIPT DESABILITADO TEMPORARIAMENTE

//Mostra a senha
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

const cpf = document.querySelector('input.cpf');
cpf.addEventListener("blur", function(){
    cpf.value = cpf.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-");
});


/*
    Adicionar animação conforme tu digita o fundo laranja e rosa muda de cor
*/