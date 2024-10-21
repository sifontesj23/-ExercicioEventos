let cont=0
const inputParagrafo = document.getElementById("contador")
const inpuBotaoIncre = document.getElementById("botao1")
inpuBotaoIncre.addEventListener("click", function(){
    cont++
    inputParagrafo.textContent = "Click = " + cont
    //alert("hola")
})

const inputFormulario = document.getElementById("formulario")
const inputBotao2 = document.getElementById("botao2")

inputBotao2.addEventListener("click", function(){
  if(inputFormulario.value === ""){
    alert('Campo Vazio')
    }
    

})