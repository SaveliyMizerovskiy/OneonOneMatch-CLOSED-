function init(){
    // create two players 
}

function player(){
    var pStrength = 6;
    var pCunning = 6;
    var pSpeed = 6;
    var pFatigue = 30;
    var pDefending = false;
    let rand = Math.floor(Math.random() * 4);
    if (rand <= 2){
        pStrength +=  Math.floor(Math.random() * 2);
        pCunning +=  Math.floor(Math.random() * 2);
        pSpeed -=  Math.floor(Math.random() * 2);
        pFatigue -= Math.floor(Math.random() * 6);
    } else {
        pStrength -=  Math.floor(Math.random() * 2);
        pCunning -=  Math.floor(Math.random() * 2);
        pSpeed +=  Math.floor(Math.random() * 2);
        pFatigue += Math.floor(Math.random() * 6);
    }
}

function CPU(){
    var cStrength = 6;
    var cCunning = 6;
    var cSpeed = 6;
    var cFatigue = 30;
    var cDefending = false;
    let rand = Math.floor(Math.random() * 4);
    if (rand <= 2){
        cStrength +=  Math.floor(Math.random() * 2);
        cCunning +=  Math.floor(Math.random() * 2);
        cSpeed -=  Math.floor(Math.random() * 2);
        cFatigue -= Math.floor(Math.random() * 6);
    } else {
        cStrength -=  Math.floor(Math.random() * 2);
        cCunning -=  Math.floor(Math.random() * 2);
        cSpeed +=  Math.floor(Math.random() * 2);
        cFatigue += Math.floor(Math.random() * 6);
    }
}

function attack(){
    let aV = (pStrength + pSpeed + pCunning) / Math.floor(Math.random() * 3);
    if (cDefending){
        let dV = cSpeed + cCunning;
    } else{
        let dV = cSpeed + (Math.random() * 6);
    }
    if (aV > dV){
        cFatigue -= aV - dV;
    }


}