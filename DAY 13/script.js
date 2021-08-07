const loadMeme = document.querySelector("button");
const meme = document.querySelector(".meme");

/* USING "then" method

loadMeme.addEventListener("click", () => {
   fetch("https://meme-api.herokuapp.com/gimme")
     .then((response) => response.json())
     .then((data) => {
       console.log(data);
       meme.src = data.url;
     });
 });*/

// USING "async-await" KEYWORDS

loadMeme.addEventListener("click", async () => {
  const response = await fetch("https://meme-api.herokuapp.com/gimme");
  const memeJSON = await response.json();
  meme.src = memeJSON.url;
});