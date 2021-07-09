const cards = document.querySelectorAll('.image-card')

cards.forEach(card => card.addEventListener('click', (e)=>
{
    console.log(this)
    e.target.classList.toggle('flip')
}))
