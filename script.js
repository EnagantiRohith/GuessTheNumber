let key = Math.ceil(Math.random()*20);
console.log("key: " + key);

let input = document.getElementById("input");
let randomNum = document.getElementById("rnd-num");
let check = document.getElementById("chk-btn");
let guess = document.getElementById("guess");
let score = document.getElementById("Score");
let highScore = document.getElementById("highScore");
let again = document.getElementById("again");
let error = document.getElementById("error-in");

check.addEventListener("click", check1);
again.addEventListener("click", again1);

let score1 = 20;
let highScore1 = 0;

let gameOver = false ; 

function check1(){
    if(gameOver) return;                    //if gameover becomwes true then the process stops
    let inputVal = input.value.trim();
    let num = Number(inputVal);

    let inputRegex = /^(0?[1-9]|1[0-9]|20)$/;
   

    if(!inputRegex.test(inputVal)){
        error.style.visibility = "visible";
        input.style.border = "1px solid red";
   } else {
        input.style.border = "1px solid black";
        error.style.visibility = "hidden";
   }


    if(num == key){
        guess.textContent = "Yayy! You are Correct";
        guess.style.fontSize = "20px";
        guess.style.color = "#C503FD";
        randomNum.textContent = key;
        document.body.style.backgroundColor = "#9CFE75";
        
        if(score1>highScore1){
            highScore1 = score1;
            highScore.textContent = highScore1;
        }
    }

    else if(num > key){
        if(score1>0){
        score1-=2;
        if(score1==0) score1=0;
        guess.textContent = "You are Too High 😟";
        guess.style.color = "red";
        guess.style.fontSize = "20px";
        }
        score.textContent = score1;
    }
    else if(num < key){
        if(score1>0){
            score1-=2;
            if(score1==0) score1=0;
            guess.textContent = "You are Too Low 😓";
            guess.style.color = "red";
            guess.style.fontSize = "20px";
        }
        score.textContent = score1;
    }

    score.textContent = score1;

    if(score1 <= 0){
        gameOver = true;
        guess.textContent = "Game Over!";
        guess.style.fontSize = "20px";
        guess.style.color = "white";
        randomNum.textContent = key;
        document.body.style.backgroundColor = "#F94142";
    }

}

function again1(){
    score1 = 20;
    key = Math.ceil(Math.random()*20);
    score.textContent = score1;
    gameOver = false;
    console.log("New key:" + key);
    input.value = "";
    randomNum.textContent = "?";
    guess.textContent = "Start guessing...";
    guess.style.fontSize = "16px";
    guess.style.color = "white";

    document.body.style.backgroundColor = "#fff";
    input.style.border = "1px solid black";
    error.style.visibility = "hidden";

}