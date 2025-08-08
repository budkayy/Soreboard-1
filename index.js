let homeScore = 0;
let guestScore = 0;

// document.getElementById("home-score-box").textContent = 

let homeBox= document.getElementById("home-score-box");
let awayBox = document.getElementById("guest-score-box")

homeBox.textContent = homeScore
awayBox.textContent = guestScore


function updateHighlight(){
    homeBox.classList.remove("leader");
    awayBox.classList.remove("leader");

    if ( guestScore > homeScore){
        awayBox.classList.add("leader")
    } else if( homeScore > guestScore){
        homeBox.classList.add("leader")
    }
}

function homeAddOne(){
    homeScore +=1
    homeBox.textContent = homeScore
    console.log("added 1")
    updateHighlight()
}

function homeAddTwo(){
    homeScore +=2
    homeBox.textContent = homeScore
    updateHighlight()
}

function homeAddThree(){
    homeScore +=3
    homeBox.textContent = homeScore
    updateHighlight()
}

function guestAddOne(){
    guestScore += 1;
    awayBox.textContent = guestScore
    updateHighlight()
}

function guestAddTwo(){
    guestScore += 2;
    awayBox.textContent = guestScore
    updateHighlight()
}

function guestAddThree(){
    guestScore += 3
    awayBox.textContent = guestScore
    updateHighlight()
}



function reset(){
    guestScore=0;
    homeScore=0;
    awayBox.textContent = guestScore;
    homeBox.textContent = homeScore
    updateHighlight()

}