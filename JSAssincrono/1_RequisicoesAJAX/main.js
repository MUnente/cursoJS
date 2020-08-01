var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/machadowma');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){ //4 é a variável de resposta com o resultado correto
        console.log(JSON.parse(xhr.responseText));
    }
}