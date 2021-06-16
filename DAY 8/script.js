let mainbox = document.getElementsByClassName("mainbox")[0];

for(let i=1; i<400; i++)
{
    let box = document.createElement("div");
    box.className = "box";
    mainbox.appendChild(box);
}

let click_boxes = document.querySelectorAll(".box");
click_boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.classList.toggle("white");
    });
});
