// QUESTION 1
// Write a JavaScript function to check whether an `input` is an array or not

function is_array(x)
{
    let arr = [];
    if(typeof x == typeof arr){
        return true;
    }
    return false;
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

// QUESTION 2
// Write a JavaScript function to clone an array

function array_Clone(x)
{
    let clone = x.slice();
    return clone;
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


// Question 3
// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function first(arr,index){
    if(index)
    {
        return arr.slice(0,index);
    }
    else if(!index){
        return arr[0];
    }
    else{
        return [];
    }

}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// QUESTION 3
// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(', '));
console.log(myColor.join(' + '));

// QUESTION 4
// Write a JavaScript program to find the most frequent item of an array

function freq(arr1){
    var mapp = {};
    for(let i=0; i<arr1.length; i++)
    {
        mapp[arr1[i]] =0;
    }
    for(let i=0; i<arr1.length; i++)
    {
        mapp[arr1[i]]++;    
    }
    console.log(mapp);
 
    for (const [key, value] of Object.entries(mapp)){
        
        let x = Object.values(mapp);     
        if(value == Math.max(...x))
        {
            console.log("Element: "+ key, "\nFrequency: "+ value);
        }
    }
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
freq(arr1);
