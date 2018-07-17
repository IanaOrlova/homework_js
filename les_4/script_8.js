// сортировка массива по убыванию



var qualificationDistance = 200;
var attempts = [120, 150, 160, 201, 203, 180, 202];
var qualified = false;
var averageBest = 0;



for (var i = 0; i<=attempts.length-2; i++){
    var minValue = attempts[i];
    for(var j= i+1; j<=attempts.length-1; j++){
        if (attempts[j]> minValue){
            minValue = attempts[j];
            var swap = attempts[i];
            attempts[i]=minValue;
            attempts[j]=swap;
        }
    }
}
console.log(attempts);


   averageBest = (attempts[0] + attempts[1] + attempts[2]) / 3;
    if (averageBest > qualificationDistance) {
        qualified = true
    } else {
        qualified = false
    }

    console.log(averageBest);

