import {evaluate} from "https://cdn.jsdelivr.net/npm/mathjs@11.8.1/+esm"

const input=document.getElementById('input');
// let dig="";

window.addText=function(str){
    // dig+=str;
    input.value+=str;
}

window.clearText=function(){
    input.value="";
}

window.backClear=function(){
    input.value=input.value.slice(0,-1);
}

document.getElementById('equal').addEventListener('click',function(){
    input.value=evaluate(input.value);  
})


document.addEventListener('keydown', function(e){
    const key=e.key;

    if(/[0-9]/.test(key)){
        input.value+=key;
    }

    if(/[+\-*/]/.test(key)){
        input.value+=key;
    }

    if(key==="Enter"){
        input.value=evaluate(input.value);
    }

    if(key==="Backspace"){
        input.value=input.value.slice(0,-1);
    }
    

    if(e.altKey&&key==="x"){
        clearText();
    }
})



console.log(dig);