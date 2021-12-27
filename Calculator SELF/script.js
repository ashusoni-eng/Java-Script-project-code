let screen= document.querySelector(".screen");
let buttons=document.querySelectorAll("button");
let screenValue='';

for(item of buttons){
    item.addEventListener("click", (e)=>{
        boxText= e.target.innerText;
        if(boxText=="X"){
            boxText="*";
            screenValue+=boxText;
            screen.value=screenValue;
        }
        else if(boxText=="C"){
            screenValue="";
            screen.value=screenValue;
        }
        else if(boxText==="D"){
            screen.value=screen.value.slice(0,-1);
        }
        else if(boxText=="="){
            screen.value=eval(screenValue);
        }
        else{
            screenValue+=boxText;
            screen.value=screenValue;
        }
    })
}