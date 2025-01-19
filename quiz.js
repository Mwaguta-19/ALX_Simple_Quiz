function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the selected answer from the radio buttons
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedbackElement.textContent = "Please select an answer.";
    }
}

// Event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);