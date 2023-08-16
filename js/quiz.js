const resultado = document.getElementById("Resultado")

function verificarresposta(resposta,prox){
if (resposta === "d"){
    resultado.innerHTML ="Resposta correta";
    resultado.style.color = "green"
    setTimeout(function(){
        window.location.href=prox;
    },2000)
} else {
    resultado.innerHTML="Resposta incorreta";
    resultado.style.color = "red"
}
}
