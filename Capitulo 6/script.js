let campoNome = document.getElementById('nome');

// Lê o nome atual do campo
let nomeAtual = campoNome.value;

// Define um novo valor para o campo 
campoNome.value = 'Novo Nome';

let campoCheckbox = document.getElementById('meuCheckbox');

// Verifica se a caixa de seleção está marcada
let isChecked = campoCheckbox.checked;

// Marca a caixa de seleção
campoCheckbox.checked = true;

let campoSelect = document.getElementById('meuSelect');

// Obtem o valor da opção selecionada
let valorSelecionado = campoSelect.value;

// Obtem o indice da opção selecionada
let indiceSelecionado = campoSelect.selectedIndex;

// Define a opção selecionada por indice
campoSelect.selectedIndex = 2;

//Quando o formulario for submetido, executa uma função de validação
document.getElementById('meuFormulario').addEventListener("submit", function(event){
    event.preventDefault();
    if(campoNome.value === ""){
        alert("Por favor, insira o seu nome");
        return false;
    }
    else{
        alert("O formulario foi enviado com sucesso")
    }
})

document.body.style.backgroundColor = '#2d2e36';

let titulo = document.getElementById('label');

titulo.style.color = 'white';

let email = document.querySelector('#email');

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(!email.value.includes('@') || !email.value.includes(".")){
        alert("Por favor, insira o seu email correamente")
    }
})
    
let password = document.getElementById('senha')

form.addEventListener('submit', function(e){
    e.preventDefault();
    let regex = /^(?=."[A-Za-z])(?=."\d)[A-Za-z/d][8,]$/;
    if (!regex.test(password.value)){
        alert('A senha precisa de pelo menos 8 caracteres, incluindo uma letra e um numero')
    }
})
