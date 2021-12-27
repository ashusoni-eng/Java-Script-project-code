let music=new Audio("media/music.mp3");
let tap=new Audio("media/tap.wav");
let gameOverAudio=new Audio("media/game-over.wav");

selectBox=document.querySelector(".playerSelection");
playboard= document.querySelector(".game")
selectXBtn= document.querySelector(".playerX");
selectOBtn= document.querySelector(".playerO");
turndiv=document.querySelector(".turn");
congrats=document.querySelector(".congrats");
winner=document.querySelector(".winner");
restart=document.querySelector(".restart")
myAudio=document.getElementById("myAudio");
imgChange= document.getElementById("volumeImg");

turn="X";
gameOver=false;

window.onload=()=>{
    selectXBtn.onclick=()=>{
        selectBox.classList.add("hide");
        playboard.classList.add("show");
        turn="X";
        turndiv.innerText= "Turn For "+ turn;
    }
    selectOBtn.onclick=()=>{
        selectBox.classList.add("hide");
        playboard.classList.add("show");
        turn="O";
        turndiv.innerText= "Turn For "+ turn;
    }
}

// Change Turn
const changeTurn=()=>{
    return turn==="X"?"O":"X";
}

// Check For A Win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=='')){
            // turndiv.innerText=boxtext[e[0]].innerText+" Win";
            gameOver=true;
            congrats.classList.add("show");
            playboard.classList.add("hide");
            winner.innerText= boxtext[e[0]].innerText+" Win";
            gameOverAudio.play();
        }
    });
}

// Main Game
// music.play();
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext= element.querySelector(".boxtext");
    element.addEventListener("click", ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            tap.play();
            checkWin();
            if(!gameOver){
                turndiv.innerText="Turn For "+turn;
            }
        }
    })
})

function togglePlay(){
    return myAudio.paused?myAudio.play():myAudio.pause();
}
function changeImg(){
    if(imgChange.src.match("media/mute.png")){
        imgChange.src="media/volume.png";
    }else{
        imgChange.src="media/mute.png";
    }
}




