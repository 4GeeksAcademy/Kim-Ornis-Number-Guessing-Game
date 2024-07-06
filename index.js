const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt('Guess a number between 1 - 100');
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert('Please add a valid Number');
    }
    else if(guess < minNum || guess > maxNum){
        window.alert('Please enter a valid Number');
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert('TOO LOW TRY AGAIN!');
        }
        else if(guess > answer){
            window.alert('TOO HIGH TRY AGAIN!');
        }
        else{
            window.alert('CORRECT!! YOU GUESSED THE RIGHT NUMBER!!');
            running = false;
        }
    }
}