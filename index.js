const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const correctAns = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}
const ques = document.getElementById("question");
ques.innerText = `what is ${num1} multiplied by ${num2} ?`;

const inputE1 = document.getElementById("input");
const formE1 = document.getElementById("form");
const scoreE1 = document.getElementById("score");
scoreE1.innerText = `score: ${score}`;
formE1.addEventListener("submit", ()=>{
    const userAns = +inputE1.value
    // console.log(correctAns, userAns, typeof userAns);
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }

});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}
