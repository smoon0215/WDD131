const steps = ["one", "two", "three"];
const listTemplate = (step) => {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();

const grades = ["A", "B", "A"];
function convertGradesToPoints(grade){
    let points = 0;
    if (grade == "A"){
        points = 4;
    }
    if (grade == "B"){
        points = 3;
    }
    return points;
}
const gpaPoints = grade.map(convertGradesToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item
});
const gpa = pointsTotal / gpaPoints.length;

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function(word){
    return word.length < 6;
})

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = numbers.indexOf(luckyNumber);

