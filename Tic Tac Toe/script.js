const cells = document.getElementsByClassName("cell");
const restart = document.getElementById("btn");
const statusText = document.getElementById("statusText");
let gameFinished = false;
let turnO=true
const cellArray = Array.from(cells)
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


cellArray.forEach((cell) => {
    cell.addEventListener("click",()=>{
        if(!gameFinished && cell.innerText===""){
           if(turnO){
                 cell.innerText="o"
                 turnO=false
                }
            else{
                cell.innerText="x"
                turnO=true
            }}
            checkWinner();
    
    },)
});


function checkWinner(){
    for (let patterns of winConditions) {
        let pos1 =cellArray[patterns[0]].innerText;
        let pos2 =cellArray[patterns[1]].innerText;
        let pos3 =cellArray[patterns[2]].innerText;
        if(pos1!=="" && pos2!=="" && pos3!=="")
        if(pos1===pos2 && pos2===pos3){
            statusText.innerText=`Congratulations ${pos1} is winner`;
            statusText.classList.remove("hide")
            gameFinished=true
        }
    }
}

function restartGame(){
    turnO=true;
    cellArray.forEach(cell=>cell.textContent="")
    statusText.innerText=""
    gameFinished=false
}

restart.addEventListener("click",restartGame,)