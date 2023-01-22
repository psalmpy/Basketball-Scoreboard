let homeScoreId = document.getElementById("resultHome")

let awayScoreId = document.getElementById("resultAway")

let addScoreHome = 0
let addScoreAway = 0



function addOne() {
    addScoreHome += 1
    
    homeScoreId.textContent = addScoreHome
}


function addTwo() {
    
    addScoreHome += 2
    homeScoreId.textContent = addScoreHome
}

function addThree() {
    
    addScoreHome += 3
    homeScoreId.textContent = addScoreHome
}

function addOneAway() {
    
    addScoreAway += 1
    awayScoreId.textContent = addScoreAway
}


function addTwoAway() {
    
    addScoreAway += 2
    awayScoreId.textContent = addScoreAway
    
}

function addThreeAway() {

    addScoreAway += 3
    awayScoreId.textContent = addScoreAway

}

function reset() {

    let addScoreHome = 0
    let addScoreAway = 0
    homeScoreId.textContent = addScoreHome
    awayScoreId.textContent = addScoreAway
}