let captcha = document.querySelector(".captcha");
let reloadBtn = document.querySelector(".reload-btn");
let input = document.querySelector("input");

let checkBtn = document.querySelector(".check-btn")
let Message = document.querySelector(".status-text")

let allCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
];

reloadBtn.addEventListener("click",function(){
    getCaptcha()
    
})

checkBtn.addEventListener("click",function(e){
    e.preventDefault();
    Message.style.display = "block";
    let Field=input.value.split("").join("")
     if (Field == captcha.innerText){
        Message.innerHTML = "Nice, Captcha Matched";
        setTimeout(function(){
            // Message.style.color = "green"
            Message.innerHTML = "";
            captcha.textContent = "";
            input.value = ""
        },2000)
        
    }else{
        
        Message.innerHTML = "Captcha Not Matched";
        setTimeout(function(){
            // Message.style.color = "green"
            Message.innerHTML = "";
            captcha.textContent = "";
            input.value = ""
        },2000)
     }
    
})

function getCaptcha(){
    for(let i=0;i<6;i++){
        let random = allCharacters[Math.floor(Math.random() * allCharacters.length)]
        captcha.textContent += random 
    }
}




