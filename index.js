// code your solution here

function superbowlWin(array){
    for(let element of array){
        if(element.result === "W"){
            return element.year;
        }
    }
}

record.find(superbowlWin);