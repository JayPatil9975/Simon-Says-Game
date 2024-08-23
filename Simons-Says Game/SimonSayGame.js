let gameSeq = [];
let userSeq = [];
let highScore = 0;

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started = true;
    }
    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random()*3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    btnFlash(ranBtn);

}

function checkAns(idx){
    // console.log("Current Level : " ,level);
   
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        highScore = Math.max(highScore,level);
        h2.innerHTML = `Game Over! <b>Your score was${level} <br> Your highest score was ${highScore}<b><br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
        
    }
}
function btnPress(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}
let Allbtns = document.querySelectorAll(".btn");

for(btn of Allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}