// QUESTION 1
// Write a JavaScript program to list the properties of a JavaScript object. 
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
// Sample Output: name,sclass,rollno

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(Object.keys(student));

// QUESTION 2
// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. 
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

console.log("Before deletion", student);
delete student.rollno;
console.log("After deletion", student); 

// QUESTION 3
// Write a JavaScript program to get the length of a JavaScript object.
// Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

console.log("Length:", Object.keys(student).length);    

// QUESTION 4
// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. 
//var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false}
];

console.log("Reading Status\n");
for(let items in library)
{
    console.log("Book:", library[items].title,"\nAuthor: ", library[items].author, "\nStatus: ", library[items].readingStatus);
}

// QUESTION 5
// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
// Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.
// Try To Attempt : Difficult Level Increased 

const cylinder= [
    {r: 8, h: 10},
    {r: 9, h: 20},
    {r: 10, h: 30}
];
for(let item in cylinder)
 {
     let vol = 2 * Math.PI *  cylinder[item].r * cylinder[item].h;
     vol = vol.toFixed(4);
     console.log(`Volume of Cylinder ${item}: ${vol}`);

 }

 // QUESTION 6
 // Write a JavaScript program to sort an array of JavaScript objects.  
 // Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
 // Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

 var library = [ 
 { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
 { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
 { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
];

library.sort(function (a,b){

    console.log(b.libraryID ,  a.libraryID, b.libraryID - a.libraryID);
    return  b.libraryID - a.libraryID;
});
console.log(library);