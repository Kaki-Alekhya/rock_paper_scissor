let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genComChoice=()=>{
    const options=["rock","paper","scissors"];
     //rock,paper,scissor
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game was draw!";
    msg.style.backgroundColor="black";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You loose! Your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    //generate computer choice => modular
    const compChoice= genComChoice();

    if(userChoice==compChoice)
    {
        drawGame();
    } else {
        let userWin=true;
        if(userChoice=="rock"){
        userWin= compChoice==paper ? false : true; 
        } else if(userChoice=="paper"){
            userWin=compChoice=="scissors"? false: true;
        } else {
            userWin=compChoice=="rock"? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

    choices.forEach((choice)=> {
        choice.addEventListener("click",()=>{
            const userChoice=choice.getAttribute("id");
            
            playGame(userChoice);
        });
    });