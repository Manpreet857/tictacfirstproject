let boxes = document.getElementsByClassName("box");
let score = document.getElementsByClassName("score")[0];
let reset = document.getElementsByClassName("reset")[0];
let turnxo = document.getElementsByClassName("turn")[0];

turn=true;
const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,5,6]
]
Array.from(boxes).forEach(box =>{
    box.addEventListener("click",()=>{
        if(turn===true){
box.innerText="X";
turn=false;
box.disabled=true;
turnxo.innerText="0"



        }else{ box.innerText="0"
            turn=true;
box.disabled=true;
turnxo.innerText="X"
        }checkwin();
    })
})

const checkwin=(()=>{
    
    for(let pattren of winpattern){
let val1 = boxes[pattren[0]].innerText;
let val2 = boxes[pattren[1]].innerText;
let val3 = boxes[pattren[2]].innerText;
if(val1!==""&& val2!==""&& val3!==""){
        if(val1 === val2 && val2=== val3 ){ 
            Array.from(boxes).forEach(box =>{
                box.disabled=true;

            })
            score.innerText=val1;
        }else console.log("no winner")
    
        }    }
})
reset.addEventListener("click",()=>{
location.reload();
})
//simple becouse i added alredy feature in mobile editer
