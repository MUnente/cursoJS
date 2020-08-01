//Exercício 1
{
    function x(rua, cidade, uf, numero, bairro){
        var endereco = {
            rua,
            numero,
            bairro,
            cidade,
            uf
        };

        return endereco;
    }

    var e = x("Rua dos pinheiros", "São Paulo", "SP", 1293, "Centro");

    console.log("O usuário mora em " + e.cidade + " / " + e.uf + ", no bairro " + e.bairro + ", na " + e.rua + " com o nº " + e.numero);
}
//Exercício 2
{
    pares(32, 321);

    function pares(x, y){
        for(x = x; x < y; x+=2){
            console.log(x);
        }
    }
}

//Exercício 3
{
    function temHabilidade(skills){
        var recebe = skills.indexOf('Javascript');
        if(recebe == 0){
            return true;
        }
        else{
            return false;
        }
    }

    var skills = ["Javascript", "ReactJS", "React Native"];
    temHabilidade(skills); //true ou false

    console.log(temHabilidade(skills));
}

//Exercício 4
{
    function experiencia(anos) {
        var tempo = anos;
        
        if(tempo <= 1){
            return 'Iniciante';
        }
        else if(tempo >= 1 && tempo <= 3){
            return 'Intermediário';
        }
        else if(tempo >= 1 && tempo <= 3){
            return 'Avançado';
        }
        else{
            return 'Jedi Master';
        }
    }

    var anosEstudo = 7;
    experiencia(anosEstudo);

    console.log(experiencia(anosEstudo));

    // De 0-1 ano: Iniciante
    // De 1-3 anos: Intermediário
    // De 3-6 anos: Avançado
    // De 7 acima: Jedi Master
}

//Exercício 5
{
    var usuarios = [
        {
            nome: "Diego",
            habilidades: ["Javascript", "ReactJS", "Redux"]
        },
        {
            nome: "Gabriel",
            habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
        }
    ];

    x(usuarios);

    function x(users){
        var devs = users;
        for(let value of devs){
            console.log("O " + value.nome + " possui as habilidades: " + value.habilidades.join(", "));
        }
    }
}