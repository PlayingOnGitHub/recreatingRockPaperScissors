let playerPoints = 0;
let computerPoints = 0;
let playerWinsRound = 2; /* 0 == win, 1 == tie, 2 == lost */

function startNewRound() {
                 /* Delete all created elements and essentially remake and restart the game */
    /* Now that, that is done.. before adding the background image.. check to see if player wins or if computer wins */
               /* If someone wins, end the game... Might only change image for simplicity */
}

function endRound() {
    let usersChoiceElement = document.getElementById("move-users-choice-to-center");
    let computersChoice = document.getElementById("move-computers-choice-to-center");
    let usersChoice = usersChoiceElement.className;
    let usersChoiceFinalAnimation = "move-back-" + usersChoice;
    
    usersChoiceElement.id = usersChoiceFinalAnimation;
    computersChoice.id = "move-back-computers-choice";

    usersChoiceElement.addEventListener("animationend", startNewRound, true );

}

function highlightWinner() {
    let addContentHere = document.getElementsByClassName("add-content-here")[0];
    let highlightingDiv = addContentHere.appendChild(document.createElement("div"));
        /* highlightingDiv.addEventListener("animationend", endRound, true ); add here actually! */
        if ( playerWinsRound == 0 ) {
            highlightingDiv.id = "highlight-player";
        }
        else if ( playerWinsRound == 1 ) {
            highlightingDiv.id = "";
        }
        else {
            highlightingDiv.id = "highlight-computer";
        }

        /* highlightingDiv.addEventListener("animationend", endRound, true ); */
}


function animateGame( computersChoiceId, usersChoiceId ) {

    /* this deletes event listeners and starts fresh */
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");

    let newRock = document.createElement("img");
        newRock.src ="rock.png";
        newRock.className = "rock";
        newRock.id = "rock";
        rock.replaceWith(newRock);

    let newPaper = document.createElement("img");
        newPaper.src = "paper.png";
        newPaper.className = "paper";
        newPaper.id = "paper";
        paper.replaceWith(newPaper);

    let newScissors = document.createElement("img");
        newScissors.src = "scissors.png";
        newScissors.className = "scissors";
        newScissors.id = "scissors";
        scissors.replaceWith(newScissors);
    /****************** done deleting listeners ***************** */

    let animationBackground = document.getElementById("animation-background");
        animationBackground.id = "add-animation-background";
    let usersChoice = document.getElementById(usersChoiceId);
        usersChoice.id = "move-users-choice-to-center";

    let addContentHere = document.getElementsByClassName("add-content-here")[0];
    let computersChoice = addContentHere.appendChild(document.createElement("img"));
        computersChoice.src = computersChoiceId + ".png";
        computersChoice.id = "move-computers-choice-to-center";

        computersChoice.addEventListener("animationend", highlightWinner, true ); /* could have selected computer or user
                                                                                                                  for event listener */

}

/* As shown from Mozilla's documentation */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
/* end of function */

function getComputersChoice() {
    let randomNumber = getRandomInt(3);

    switch (randomNumber) {
        case 0: return "rock";
                break;
        case 1: return "scissors";
                break;
        case 2: return "paper";
                break;
        default: return "error";
                break;
    }
};

function humanVsComputer( usersChoice ) {
    let computersChoice = getComputersChoice();

    if ( usersChoice == "scissors" && computersChoice == "paper" || usersChoice == "paper" && computersChoice == "rock" || 
        usersChoice == "rock" && computersChoice == "scissors" ) {
            playerPoints++;
            playerWinsRound = 0;
        }

    else if ( usersChoice == computersChoice ) {
            playerWinsRound = 1;
    }

    else {
        computerPoints++;
        playerWinsRound = 2;
    }

    return computersChoice;

}

function determineWhoWinsOnClick() {
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");
    let computersChoice = "";

    rock.addEventListener("click", () => { computersChoice = humanVsComputer( "rock" );
                                           animateGame( computersChoice, "rock" ); }, true );
    paper.addEventListener("click", () => { computersChoice = humanVsComputer( "paper");
                                            animateGame( computersChoice, "paper" ); }, true );
    scissors.addEventListener("click", () => { computersChoice = humanVsComputer( "scissors" );
                                               animateGame( computersChoice, "scissors" ); }, true );

}

function changeImageOnHover() {
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");

    rock.addEventListener("mouseover", () => {rock.style.transform = "scale(1.2)";
                                              rock.style.zIndex = "2";
                                             }, true );

    rock.addEventListener("mouseout", () => {rock.style.transform = "";
                                              rock.style.zIndex = "";
                                            }, true );
                                             
    paper.addEventListener("mouseover", () => {paper.style.transform = "scale(1.2)";
                                              paper.style.zIndex = "2";
                                              }, true );

    paper.addEventListener("mouseout", () => {paper.style.transform = "";
                                              paper.style.zIndex = "";
                                             }, true );

    scissors.addEventListener("mouseover", () => {scissors.style.transform = "scale(1.2)";
                                                  scissors.style.zIndex = "2";
                                                 }, true );

    scissors.addEventListener("mouseout", () => {scissors.style.transform = "";
                                                 scissors.style.zIndex = "";
                                                }, true );

}

function startMatch() {
    /*let startButton = document.getElementById("start-button");
    let backgroundImage = document.getElementById("background-image");*/
        /*startButton.addEventListener("click", () => { 
            startButton.remove();
            backgroundImage.src = "comfortable-background-image.png";
         }, true );*/

    changeImageOnHover();
    determineWhoWinsOnClick();
}

startMatch();