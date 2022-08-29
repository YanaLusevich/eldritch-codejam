const ancientsData = [
    {
      id: 'azathoth',
      name: 'azathoth',
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'cthulhu',
      name: 'cthulhu',
      firstStage: {
        greenCards: 0,
        blueCards: 2,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 1,
        blueCards: 0,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'iogSothoth',
      name: 'iogSothoth',
      firstStage: {
        greenCards: 0,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'shubNiggurath',
      name: 'shubNiggurath',
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 3,
        blueCards: 1,
        brownCards: 2,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
  ];

const ancient = document.querySelector('.ancient');

const dificulty = document.querySelector('.dificulty_container');
const dificultyItem = document.querySelector('.dificulty');
const shuffleButton = document.querySelector('.shuffle');
const cardBack = document.querySelector('.card_back');
const cardFront = document.querySelector('.card');
function showDificulty () {
    dificulty.classList.add('hidden');
}
ancient.addEventListener('click', showDificulty);

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



