/*
const user = document.querySelector(".user img");
const computer = document.querySelector(".computer img");
const upoint = document.querySelector(".uscore");
const cpupoint = document.querySelector(".cscore");
const options = document.querySelectorAll(".options button")

options.forEach((option) => {
    option.addEventListener("click",  () => {
        user.classList.add("usershake");
        computer.classList.add("computershake");


        setTimeout(() => {
            user.classList.remove("usershake");
            computer.classList.remove("computershake");

            user.src = "./" + option.innerHTML + "user.png";

            const choice = ["STONE","PAPER","SCISSORS"];
            let arrayno = Math.floor(Math.random() * 3);
            let computerchoice = choice[arrayno]
            computer.src = "./" + computerchoice + "computer.png";
            
            
            let upoints = parseInt(upoint.innerHTML);
            let cpoints = parseInt(cpupoint.innerHTML);
            
            

            if(option.innerHTML === "ROCK"){
                if(computerchoice === "PAPER")
                    computerpoints.innerHTML = cpoints + 1;
                else if(computerchoice === "SCISSORS")
                    userpoints.innerHTML = upoints + 1;
                }
                else if(option.innerHTML = "PAPER"){
                if (computerchoice === "SCISSORS")
                    computerpoints.innerHTML = cpoints + 1;
                else if (computerchoice === "ROCK")
                    userpoints.innerHTML = upoints + 1; 
                }
                else{
                 if (computerchoice === "ROCK")
                    computerpoints.innerHTML = cpoints + 1;
                else if (computerchoice === "PAPER")
                    userpoints.innerHTML = upoints + 1;
                } 
        },900);
    });
});   

*/
const user = document.querySelector(".user img");
const computer = document.querySelector(".computer img");
const upoint = document.querySelector(".uscore");
const cpupoint = document.querySelector(".cscore");
const options = document.querySelectorAll(".options button");

options.forEach((option) => {
    option.addEventListener("click", () => {
        user.classList.add("usershake");
        computer.classList.add("computershake");

        setTimeout(() => {
            user.classList.remove("usershake");
            computer.classList.remove("computershake");

            const userChoice = option.innerHTML;
            user.src = "./" + userChoice + "user.png";

            const choices = ["ROCK", "PAPER", "SCISSORS"];
            const randomIndex = Math.floor(Math.random() * 3);
            const computerChoice = choices[randomIndex];
            computer.src = "./" + computerChoice + "computer.png";

            let uPoints = parseInt(upoint.innerHTML);
            let cPoints = parseInt(cpupoint.innerHTML);

            if (userChoice === computerChoice) {
                return;
            }

            if (
                (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
                (userChoice === "PAPER" && computerChoice === "ROCK") ||
                (userChoice === "SCISSORS" && computerChoice === "PAPER")
            ) {
                upoint.innerHTML = uPoints + 1;
            } else {
                cpupoint.innerHTML = cPoints + 1;
            }

        }, 900);
    });
});
