function vperg1(botaoClicado,opcaoSelecionada){
if(opcaoSelecionada == 'c1'){
    var respCerta = document.getElementById('c1');
    respCerta.style.backgroundColor = '#63c204ff';
    document.getElementById('resp1').innerHTML="🎉Parabéns, você acertou!!"
} else{
    var respCerta = document.getElementById('c1');
    respCerta.style.backgroundColor = '#63c204ff';
    botaoClicado.style.backgroundColor = "red";
    document.getElementById('resp1').innerHTML="😰Ops, errou!"
}
}

function vperg2(botaoClicado,opcaoSelecionada){
if(opcaoSelecionada == 'b2'){
    var respCerta = document.getElementById('b2');
    respCerta.style.backgroundColor = '#63c204ff';
    document.getElementById('resp2').innerHTML="🎉Parabéns, você acertou!!"
} else{
    var respCerta = document.getElementById('b2');
    respCerta.style.backgroundColor = '#63c204ff';
    botaoClicado.style.backgroundColor = "red";
    document.getElementById('resp2').innerHTML="😰Ops, errou!"
}
}

function vperg3(botaoClicado,opcaoSelecionada){
if(opcaoSelecionada == 'd3'){
    var respCerta = document.getElementById('d3');
    respCerta.style.backgroundColor = '#63c204ff';
    document.getElementById('resp3').innerHTML="🎉Parabéns, você acertou!!"
} else{
    var respCerta = document.getElementById('d3');
    respCerta.style.backgroundColor = '#63c204ff';
    botaoClicado.style.backgroundColor = "red";
    document.getElementById('resp3').innerHTML="😰Ops, errou!"
}
}

function limpar() {
    ['a1','b1','c1','d1'].forEach(id => {
        document.getElementById(id).style.backgroundColor = "";
    });
    ['a2','b2','c2','d2'].forEach(id => {
        document.getElementById(id).style.backgroundColor = "";
    });
    ['a3','b3','c3','d3'].forEach(id => {
        document.getElementById(id).style.backgroundColor = "";
    });
    document.getElementById('resp1').innerHTML = "";
    document.getElementById('resp2').innerHTML = "";
    document.getElementById('resp3').innerHTML = "";
}

