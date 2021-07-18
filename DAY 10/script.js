const cards = document.querySelectorAll('.image-card');
const welcomeSound = document.getElementById('#welcomeSound');
var flipped = false;
var firstCard, secondCard;
var statue = false;

function flipCard() 
{
    if(statue) return; // if game statued, no flipping allowed
    if(this === firstCard) return; // handle double click on same card

      this.classList.add("flip");
      if(!flipped) //not flipped
      { 
          flipped=true;
          firstCard = this;
          return;
      }
      //flipped 
          flipped=false;
          secondCard=this;
          matchCard();
}
          
    function matchCard()
    {   
        //disbale cards
        if (firstCard.dataset["game"] === secondCard.dataset["game"]) {
          firstCard.removeEventListener("click", flipCard);
          secondCard.removeEventListener("click", flipCard);
        } 
        else //unflip cards
        {
            statue = true;
            setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            statue = false;
            resetFirstCard();
          }, 460);
        }
    }

function resetFirstCard(){
    [firstCard] = [null];
}

window.onload = () => {
    shuffle();
    welcomeSound.play();
};

function shuffle() {
  cards.forEach((card) => {
    let randomID = Math.floor(Math.random() * 9); // because we have 8 cards so we need a random no. in the range [0,9)
    card.style.order = randomID;
  });
}
cards.forEach((card) => card.addEventListener('click', flipCard));

//timer 10 s






