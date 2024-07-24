let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const drawGame=()=>{
    console.log("Game Draw");
    msg.innerText="Game Draw! Play Again.";
    msg.style.backgroundColor="#ffc300";
    msg.style.color="black";

}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");
        msg.innerText=`You Win!${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose!");
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
}
const genCompChoice=()=>{
    options=["rock","paper","scissors"];
   const randomIdx= Math.floor(Math.random()*3);
   return options[randomIdx];
}
const playGame=(userChoice)=>{
    console.log("you selected",userChoice);
    let compChoice=genCompChoice();
    console.log("Bot selected",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice=="paper"){
        userWin=compChoice=="scissors"?false:true
    }
    else{
        userWin=compChoice=="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
});
});

