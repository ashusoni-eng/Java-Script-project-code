let screen=document.querySelector(".screen");
let buttons= document.querySelectorAll("button");
let screenValue="";

for(item of buttons){
    item.addEventListener("click", (e)=>{
        boxvalue=e.target.innerText;
        if(boxvalue=="X"){
            boxvalue='*';
            screenValue+=boxvalue
            screen.value=screenValue;   
        }
        else if(boxvalue=="C"){
            screenValue=""
            screen.value=screenValue;   
        }
        else if(boxvalue=="="){
            screen.value=eval(screenValue);
        }
        else if(boxvalue=="backspace"){
                screenValue=screen.value.slice(0,-1);
                screen.value=screenValue;
        }
        else{
            screenValue+=boxvalue;
            screen.value=screenValue;   
        }
        
    })
    
}