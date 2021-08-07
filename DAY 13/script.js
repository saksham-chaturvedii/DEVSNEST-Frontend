const loadMeme = document.querySelector("button");
const meme = document.querySelector(".meme");

loadMeme.addEventListener("click", () => {
  fetch("https://meme-api.herokuapp.com/gimme")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      meme.src = data.url;
    });
});
