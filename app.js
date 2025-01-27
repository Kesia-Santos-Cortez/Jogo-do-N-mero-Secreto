//let titulo = document.querySelector("h1") // seleciona o campo no HTML
//titulo.innerHTML = "Jogo do Número Secreto"; //inisere no HTML

//let paragrafo = document.querySelector("p")
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";
let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag); // seleciona o campo no HTML
    campo.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirTexto("h1", "Jogo do Número Secreto");
    exibirTexto("p","Escolha um número entre 1 e 100");
}
exibirMensagemInicial();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeElementos = listaDeNumerosSorteados.length;
    if(quantidadeElementos == numeroLimite){
        listaDeNumerosSorteados =  [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
 }
 function limparCampo(){
     chute = document.querySelector("input");
     chute.value = "";
 }

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled","true");
 }

function verificarChute() {
    let chute = document.querySelector("input").value;

    if(chute==numeroSecreto){
        let palavraTentativa = tentativas>1? "tentativas" : "tentativa";
        let fraseTentativas = `Você descobriu o Número Secreto com ${tentativas} ${palavraTentativa}`;
        exibirTexto("h1", "Acertou!");
        exibirTexto("p", fraseTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute > numeroSecreto){
            exibirTexto("p","O número secreto é menor.");
        }else{
            exibirTexto("p", "O  número secreto é maior.");
        }
        //tentativas = tentativas+1;
        tentativas++;
        limparCampo();
    }
}