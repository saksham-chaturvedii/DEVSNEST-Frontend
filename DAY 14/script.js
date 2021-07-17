var title = document.querySelector('.title');
var lastScrollY = 0;
var size = 0;
console.log(size);

window.onscroll =()=>{
                // console.log(title.style.letterSpacing);
    if(this.scrollY < lastScrollY)
    {
            
        size+=1;
        title.style.zoom = size;
            // console.log(title.style.letterSpacing);
            // title.style.letterSpacing++;

    }
    else
    {
        size-=1;
        title.style.zoom = size;
    }
    this.lastScrollY = this.scrollY;
}


