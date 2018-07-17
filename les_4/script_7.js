
// Медиана


var usersByDay = [1, 7, 16, 22,35, 40, 45];
console.log(usersByDay);

if (usersByDay.length % 2 !== 0) {
    var medianIndex = (usersByDay.length - 1) / 2;
    console.log(medianIndex);
    var median = usersByDay[medianIndex];
    console.log(median);
} else {
    var leftIndex = usersByDay.length / 2 - 1;
    var rightIndex = usersByDay.length / 2;
    console.log(leftIndex, rightIndex);
    var median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2;
    console.log(median);
}

