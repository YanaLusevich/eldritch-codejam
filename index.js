import ancients from './eldritch-codejam/data/ancients.js';
import cardsBlue from './eldritch-codejam/assets/MythicCards/blue/index.js';
import cardsBrown from './eldritch-codejam/assets/MythicCards/brown/index.js';
import cardsGreen from './eldritch-codejam/assets/MythicCards/green/index.js';
/* console.log(cardsBrown); */


let containerCard = document.querySelector('.card_front_container');
const dificulty = document.querySelector('.dificulty_container');
const dificultyItem = document.querySelector('.dificulty');
const shuffleButton = document.querySelector('.shuffle');
const cardBack = document.querySelector('.card_back');
const cardFront = document.querySelector('.card');


 function insert_divs() {
    var parent = document.getElementsByClassName("ancients_container")[0];
    var installments = [ancients[0].cardFace, ancients[1].cardFace, ancients[2].cardFace, ancients[3].cardFace];
    let i = 0;

    installments.forEach(function(e){

      var img = document.createElement('img');
      var installment = document.createElement('div');

      img.setAttribute('src', e);
      img.classList.add('ancient');
      installment.classList.add('ancients_card');
            
      installment.appendChild(img);
      parent.appendChild(installment);
      i++;


      function showDificulty () {
        dificulty.classList.add('hidden');
      }
    img.addEventListener('click', showDificulty);

    function showShuffle () {
      dificulty.classList.remove('hidden');
      shuffleButton.classList.add('hidden');
      }
    dificultyItem.addEventListener('click', showShuffle);

    function showCardDeck () {
      shuffleButton.classList.remove('hidden');
      cardBack.classList.add('hidden');
      }
    shuffleButton.addEventListener('click', showCardDeck);
    });
    
  }
  window.onload = insert_divs;

function getRandomNum(min, max) {
    min = Math.ceil(1);
    max = Math.floor(21);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
/* function getRandomNum(min, max) {
  document.querySelector('.card_back_container').innerHTML = (Math.floor(Math.random() * (max - min + 1) ) + min);
} */

/* console.log(containerCard); */

function showDeck () {
  let card = document.querySelectorAll('.new-card');
  let cardNum = getRandomNum();
  var img = document.createElement('img');
  img.setAttribute('src', cardsGreen[cardNum]);
  img.classList.add('card');
  img.classList.add('new-card');

  console.log(card);
  containerCard.classList.add('hidden');
  containerCard.appendChild(img);
}

cardBack.addEventListener('click', showDeck);




