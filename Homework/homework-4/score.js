//score list
const scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38];

//reference
const scoreLst = document.getElementById("scoreList");
const averageSc = document.getElementById("averageScore");

//total score
let total = 0;

for (let i = 0; i < scores.length; i++){
    scoreLst.innerHTML += "<li>"+ scores[i] + "</li>";
    total += scores[i];
}

//calculate score
const averageScore = total / scores.length; 
averageSc.textContent = "The average score is: " + averageScore.toFixed(2);