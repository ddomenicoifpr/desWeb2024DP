function vetor() {
    var vet = [5, 6, 7, 8];
    //alert("O segundo elemento do vetor é: " + vet[1]);

    vet.push("Aula");

    //Laço para percorrer o vetor
    for (var i = 0; i < vet.length; i++)
        alert(vet[i]);
}

function objeto() {
    var pessoa = {
        nome: "Daniel",
        idade: 27,
        profissao: "Professor"
    };
    //alert("O nome da pessoa é: " + pessoa.nome);

    var pessoa2 = {
        nome: "Rafael",
        idade: 17,
        profissao: "Aluno"
    };

    var vetor = [pessoa, pessoa2];
    /*alert("Idade da segunda pessoa do vetor: " + 
            vetor[1].idade); */

    var pessoa3 = {
        nome: "Agatha",
        idade: 18,
        profissao: "Aluna"
    };

    vetor.push(pessoa3);

    for(var i=0; i<vetor.length; i++) 
        console.log("Nome: " + vetor[i].nome +
                    " - Idade: " + vetor[i].idade +
                    " - Profissão: " + vetor[i].profissao);
}