const rock = document.getElementById('rock')
const pin = document.querySelector('.pin')
const container = document.querySelector('.container')
const yourScore = document.querySelector('.yourScore')

function showPin() {
  container.style.opacity = "1",
    sorteio()
  changeScore()
}

let value1 = 1;
let value2 = 3;

function sorteio() {

  value1 = Math.ceil(value1);
  value2 = Math.floor(value2);
  return Math.floor(Math.random() * (value2 - value1) + value1);
}

function changeScore() {

  if (sorteio() > 1) {
    // Transforma a string do span em numero //
    let span = document.getElementById("yourScore");
    let number = parseInt(span.textContent, 10);
    number++;
    span.textContent = number;

    let score = document.getElementById("youScore");
    let numb = parseInt(score.textContent, 10);
    numb++;
    youScore.textContent = numb;

    // Mudando a cor e o texto do Pin //
    let pin = document.querySelector(".container");
    pin.textContent = "VOCÊ GANHOU!"
    pin.style.borderColor = "#2ec4b6"


  } else {
    // Transforma a string do span em numero //
    let span = document.getElementById("machineScore");
    let number = parseInt(span.textContent, 10);
    number++;
    span.textContent = number;

    let score = document.getElementById("robotScore");
    let numb = parseInt(score.textContent, 10);
    numb++;
    robotScore.textContent = numb;

    // Mudando texto dentro do Pin //
    let pin = document.querySelector(".container");
    pin.textContent = "ROBÔ GANHOU!"
    pin.style.borderColor = "#e71d36"
  }


}





