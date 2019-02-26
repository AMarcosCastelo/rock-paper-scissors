"use strict";

// Variables 
var computerWins = 0;
var playerWins = 0;
var maxWin = 5; //select elements

var buttons = document.querySelectorAll('.choice');
var message = document.getElementById('resultMessage');
var score = document.getElementById('score');
var winner = document.getElementById('winner');
var reset = document.getElementById('reset');

function addEventListenerAll(element, events, fn) {
  events.split(' ').forEach(function (event) {
    element.addEventListener(event, fn, false);
  });
}

buttonsInit(buttons);

function buttonsInit(element) {
  element.forEach(function (btn, index) {
    addEventListenerAll(btn, 'click drag', function (e) {
      var textButtons = btn.id;
      startRound(textButtons, computerPlayed());
      showScore();
    });
  });
}

function getPlayed(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlayed() {
  var played = getPlayed(1, 3);

  if (played == 1) {
    return "paper";
  } else if (played == 2) {
    return "scissors";
  } else {
    return "rock";
  }
}

function startRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "paper":
      if (computerSelection == playerSelection) {
        message.innerHTML = "It's a Draw!";
      } else if (computerSelection == "scissors") {
        computerWins++;
        message.innerHTML = "Computer Wins! Scissors beats Paper";
      } else {
        playerWins++;
        message.innerHTML = "Player Win! Paper beats Rock";
      }

      break;

    case "rock":
      if (computerSelection == playerSelection) {
        message.innerHTML = "It's a Draw!";
      } else if (computerSelection == "paper") {
        computerWins++;
        message.innerHTML = "Computer Wins! Paper beats Rock";
      } else {
        playerWins++;
        message.innerHTML = "Player Win! Rock beats Scissors";
      }

      break;

    case "scissors":
      if (computerSelection == playerSelection) {
        message.innerHTML = "It's a Draw!";
      } else if (computerSelection == "rock") {
        computerWins++;
        message.innerHTML = "Computer Wins! Rock beats Scissors";
      } else {
        playerWins++;
        message.innerHTML = "Player Win! Scissors beats paper";
        break;
      }

  }
}

function showScore() {
  score.innerHTML = "You: ".concat(playerWins, " VS Computer ").concat(computerWins);

  if (playerWins == maxWin) {
    winner.innerHTML = "YOU WIN!!";
    gameFinish();
  } else if (computerWins == maxWin) {
    winner.innerHTML = "COMPUTER WIN";
    gameFinish();
  }
}

function gameFinish() {
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;
}

reset.addEventListener('click', function () {
  computerWins = 0;
  playerWins = 0;
  winner.innerHTML = '';
  message.innerHTML = '';
  score.innerHTML = '';
  document.getElementById('rock').disabled = false;
  document.getElementById('paper').disabled = false;
  document.getElementById('scissors').disabled = false;
});