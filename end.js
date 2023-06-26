const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const MAX_HIGH_SCORE = 5;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = `Điểm của bạn: ${mostRecentScore}`;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("Clicked");
    e.preventDefault();
    
    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score );
    highScores.splice(MAX_HIGH_SCORE);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("./index.html");
};