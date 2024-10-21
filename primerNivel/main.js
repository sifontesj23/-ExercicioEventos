const botao1 = document.querySelector("#botao1")
botao1.addEventListener("click" , function() {
      alert("Boton 1 Clicado");
})
      

const inputBotton2 = document.getElementById("botao2")
const inputParagrafo = document.getElementById("paragrafo")

inputBotton2.addEventListener("click", function() {
    
    inputParagrafo.textContent = "TEXTO ALTERADO"
    inputParagrafo.style.color = "red"
    
  })

const inputBotton3 = document.getElementById("botao3")
const inputdivExercicio3 = document.getElementById("divExercicio3")
inputBotton3.addEventListener("click", function() {
    inputdivExercicio3.style.background =  "blue"
  })


