/*Exercício 1
function checaIdade(idade) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(idade >= 18){
                resolve();
            }
            else{
                reject();
            }
        }, 2000);
    });
}

checaIdade(20)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
});*/

/*Exercício 2
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

buttonElement.onclick = function(){
    var user = inputElement.value;

    //UTILIZANDO A REQUISIÇÃO NATIVA DO JAVASCRIPT (XMLHttpRequest)
    var buscaUser = function(){
        return new Promise(function(resolve, reject){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.github.com/users/'+user+'/repos');
            xhr.send(null);

            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else{
                        reject('Erro na requisição');
                    }
                }
            }
        });
    }

    buscaUser()
        .then(function(response){
            repositorio(response.data);
        })
        .catch(function(error){
            console.warn(error);
    });

    //UTILIZANDO A REQUISIÇÃO DA BIBLIOTECA AXIOS
    axios.get('https://api.github.com/users/'+user+'/repos')
        .then(function(response){
            repositorio(response.data);
            //console.log(repos);
        }).catch(function(error){
            console.warn(error);
    });
}

var repositorio = function(dados){
    for(let value of dados){
        var itemElement = document.createElement('li');
        var itemText = document.createTextNode(value.name);
        itemElement.appendChild(itemText);
        listElement.appendChild(itemElement);
    }
}*/

/*Exercício 3*/
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

buttonElement.onclick = function(){
    var user = inputElement.value;
    loadingRepository();

    //UTILIZANDO A REQUISIÇÃO DA BIBLIOTECA AXIOS
    axios.get('https://api.github.com/users/'+user+'/repos')
        .then(function(response){
            repositorio(response.data);
            //console.log(repos);
        }).catch(function(error){
            errorRepositorio(error);
    });
}

function repositorio(dados){
    listElement.innerHTML = '';

    if(dados == ''){
        const itemElement = document.createElement('li');
        const itemText = document.createTextNode('Este usuário não possui nenhum repositório');
        itemElement.appendChild(itemText);
        listElement.appendChild(itemElement);
    }

    else{
        for(let value of dados){
            const itemElement = document.createElement('li');
            const itemText = document.createTextNode(value.name);
            itemElement.appendChild(itemText);
            listElement.appendChild(itemElement);
        }
    }

    limpaInput();
}

//Mensagem 'Carregando...'
function loadingRepository(){
    listElement.innerHTML = '';

    const loadingElement = document.createElement('li');
    const textElement = document.createTextNode('Carregando...');
    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
}

//Mensagem de erro
function errorRepositorio(error){
    listElement.innerHTML = '';

    const errorElement = document.createElement('li');
    const textElement = document.createTextNode(error);
    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);

    limpaInput();
}

function limpaInput(){
    inputElement.value = '';
    inputElement.focus();
}

//Quando clicado no enter, executa a função do botão
inputElement.addEventListener('keyup', function(e){
    var key = e.witch || e.keyCode;
    if(key == 13){
        buttonElement.onclick();
    }
});