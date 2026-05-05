function exemploFor() {
    for (let i = 1; i <= 5; i++) {
    alert("Repetição nº: " + i);
    }
}

function exemploWhile() {
    let voltas = 0; 
    let energia = 100;

    while (energia > 0) {
    voltas++;
    energia -= 25;
    alert("Completei a volta " + voltas + ". Energia restante: " + energia);
    }
}

function exemploEach() {
    const frutas = ["Maçã", "Banana", "Morango", "Uva"];

    frutas.forEach(function(fruta, indice) {
    alert(indice + ": Eu gosto de " + fruta);
    });
}

function exemploIfElse() {
    let hora = 14;

    if (hora < 12) {
        alert("Bom dia!");
    } else if (hora < 18) {
        alert("Boa tarde!");
    } else {
        alert("Boa noite!");
    }
}

function exemploTernario() {
    let idade = 20;
    const status = (idade >= 18) ? "Adulto" : "Menor de idade";

    alert(status);
}

function exemploSwitch() {
    let fruta = "Morango";

    switch (fruta) {
        case "Laranja":
            alert("R$ 5,00 o quilo.");
            break;
        case "Morango":
            alert("R$ 10,00 a caixa.");
            break;
        case "Banana":
            alert("R$ 4,00 a dúzia.");
            break;
        default:
            alert("Desculpe, não temos essa fruta.");
    }
}

function exemploFuncao() {
    function soma(n1=0, n2=0){
    return n1 + n2
    }
    alert(soma(2,5))
}