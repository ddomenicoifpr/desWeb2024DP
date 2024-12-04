function somar() {
    var v1 = document.getElementById("v1");
    var v2 = document.querySelector("#v2");
    var div = document.getElementById("msg");

    if(v1.value && v2.value) {
        var soma = parseInt(v1.value) + parseInt(v2.value);

        div.innerHTML = "Soma: " + soma;
        div.style.color = "green";
    } else {
        div.innerHTML = "Informe os valores!";
        div.style.color = "red";
    }
}