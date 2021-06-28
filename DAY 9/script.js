const container_box = document.querySelector('.container_box');
const seat_box = document.querySelectorAll('.seat_box');
const bookedSeats = document.querySelector('.bookedSeats');
const remainingSeats = document.querySelector('.remainingSeats');


var bookedSeatsCount = 0;
var remainingSeatsCount = 36;

for(let i=0; i<36; i++)
{
    let box = document.createElement("div");
    box.className = "seat_box";
    container_box.appendChild(box);
}

    seat_box.forEach((seat_box) => {
        seat_box.addEventListener('click', (e)=>{
        bookedSeatsCount+=1;
        remainingSeatsCount+=1;
        bookedSeats.innerHTML = `Booked Seats: ${bookedSeatsCount}`
        remainingSeats.innerHTML = `Remaining Seats: ${remainingSeatsCount}`
        e.target.classlist.toggle("seat_booked");
    })
});

