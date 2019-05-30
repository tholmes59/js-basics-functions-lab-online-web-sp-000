// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    return Math.abs(42 - block);   
}

function distanceFromHqInFeet (block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(block1, block2) {
    return Math.abs(block1 -block2) * 264;
}

function calculatesFarePrice(block1, block2) {
    if (distanceTravelledInFeet(block1, block2) < 400 ) {
        return 0;
    } else if (distanceTravelledInFeet(block1, block2) > 400 && distanceTravelledInFeet(block1, block2) < 2000) {
        return (distanceTravelledInFeet(block1, block2) - 400) * 0.02;
    } else if (distanceTravelledInFeet(block1, block2) > 2000 && distanceTravelledInFeet(block1, block2) < 2500) {
        return 25;
    } else if (distanceTravelledInFeet(block1, block2) > 2500) {
        return 'cannot travel that far';
    }
        
     
}