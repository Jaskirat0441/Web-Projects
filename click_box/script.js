const redBtn= document.getElementById("red");
redBtn.onclick=()=>console.log("red cicked");

const Square=document.querySelectorAll(".color_square");
 
const score={'red':1,'yellow':1,'green':1};

Square.forEach(square=>{
    square.onclick=()=>{
       square.innerText=score[square.value]++ ;

    // console.log(square.value);
    }
})


function clearScore(){
    score.red=1
    score.yellow=1
    score.green=1
    Square.forEach(square => square.innerText="")
}

const  clear_game=document.getElementById("clear_game");
clear_game.onclick=()=>clearScore();