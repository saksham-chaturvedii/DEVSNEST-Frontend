var title = document.querySelector('.title');

window.onscroll =()=>{
        title.style.fontSize = (18 + this.scrollY/10) + "px";
}