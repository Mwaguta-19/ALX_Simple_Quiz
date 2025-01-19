function checkAnswer (){
    // Correct answer (should not change, so use const)
    const correctAnswer = "4";

    // Get the selected answer from the radio buttons
    let userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Check if an answer is selected
    if (!userAnswer) {
        // If no answer is selected, prompt the user to select one
        feedbackElement.textContent = "Please select an answer.";
        return; // Exit the function early if no answer is selected
    }

    // Compare the user's answer with the correct answer
    if (userAnswer.value === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);