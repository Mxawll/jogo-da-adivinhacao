// variables
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")
const inputNumber = document.querySelector("#inputNumber")
let randomNumber = generateRandomNumber() //retorna o valor gerado pela func p/ variavel
let attempts = 1

// events
btnTry.addEventListener("click", handleTryClick)
btnAgain.addEventListener("click", handleAgainClick)
document.addEventListener("keydown", handleKeyDown)

// functions
function generateRandomNumber() {
   return Math.round(Math.random() * 10)
}

function handleKeyDown(event) {
   if(event.key == "Enter" && screenOne.classList.contains("hide")) {
      handleAgainClick()
   }
}

function handleTryClick(event) {
   event.preventDefault() // previne que o form faca o submit, atualizando a page

   if (inputNumber.value == "") {
      alert("Digite um número válido, entre 0 e 10")
      return
   }

   if (inputNumber.value < 0 || inputNumber.value > 10) {
      alert("Digite um número entre 0 e 10")
      return
   }

   if (randomNumber == inputNumber.value) {
      TogleScreen()
      
      randomNumber = generateRandomNumber() // atualiza o número randomico gerado
      
      if (attempts == 1) {
         screenTwo.querySelector("h2").textContent = `Acertou na ${attempts}º tentativa`
      } else {
         screenTwo.querySelector("h2").textContent = `Acertou em ${attempts} tentativas`
      }
   }
   
   inputNumber.value = ""
   attempts++
   console.log(attempts)
}

function handleAgainClick() {
   TogleScreen()
   attempts = 1
}

function TogleScreen() {
   screenOne.classList.toggle("hide")
   screenTwo.classList.toggle("hide")
}