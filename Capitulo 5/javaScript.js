let button = document.getElementById('myButton');

button.addEventListener('click', function(){
    console.log("O botão foi clicado");
});

let paragraph = document.getElementById('myParagraph');

paragraph.addEventListener('mouseover', function(){
    console.log("o mouse esta sobre o paragrafo");
})

let input = document.getElementById('myInput');

input.addEventListener('change', function(){
    console.log('O valor do input foi alterado para: ' + this.value);
})

let form = document.getElementById('myForm');

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Formulario submetido');
})

window.addEventListener('keydown', function(event){
    console.log('voce pressionou a tecla: ', + event.key);
})

let meuElemento = document.getElementById('meuElemento');

meuElemento.style.color = 'red';

document.body.style.backgroundColor = '#5900b3';

meuElemento.style.fontSize = '20px';

meuElemento.style.backgroundColor = '#5900b3'

meuElemento.classList.add('vermelho');
