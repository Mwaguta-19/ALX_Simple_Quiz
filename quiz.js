function checkAnswer() {
    
    const correctAnswer = "4";

   
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

   
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer) {
       
        if (userAnswer.value === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
        
    } else {
        feedbackElement.textContent = "Please select an answer.";
    }
    
}
document.getElementById('submit-answer').addEventListener('click', checkAnswer);