function redirecionar(){
    window.open("http://google.com.br");

}
// Adicionando Texto no documento HTML pelo ID
function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar";
    //console.log(document.getElementById("agradecimento"))
}

function trocar(elemento){
    //alert("Trocar Texto")
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por Passar o Mouse"
}

function voltar(elemento){
    //document.getElementById("mousemove2").innerHTML = "Passe o mouse Aqui"
    elemento.innerHTML = "Passe o mouse Aqui"
}

function load(){
    alert("Pagina Carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)

}