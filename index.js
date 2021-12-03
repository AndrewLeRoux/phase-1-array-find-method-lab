function superbowlWin(array) {
    function isWin(element){
        return element.result === "W"
    }
    
    if (array.find(isWin) === undefined) {
        return array.find(isWin)
    }
    else {
        return array.find(isWin).year
    }
    
    
}
