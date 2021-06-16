let screen = document.getElementById('input');
buttons = document.querySelectorAll('button');
let inputValue = '';

for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

         if(buttonText == '<'){
            x =  inputValue.substr(0,inputValue.length-1);
            inputValue = x;
            screen.value = inputValue;
        } else
        if(buttonText == 'AC'){
            inputValue = '';
            screen.value = inputValue;
        }
        else if(buttonText == '='){
            screen.value = eval(inputValue);
        }
        else{              
            inputValue += buttonText;
            screen.value = inputValue;
        }

    })
}

