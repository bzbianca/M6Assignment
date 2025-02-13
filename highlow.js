
let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = Number(prompt("Guess the number (1-10):"))
let userAttempts = 0


while (randomNumber !== userGuess) {
    userAttempts += 1
    if(userGuess === 999) {
        break
    }
    if(userGuess >= 11 || userGuess < 1) {
        userGuess = Number(prompt("Invalid response. Try again:"))
    } else if(userGuess > randomNumber) {
        userGuess = Number(prompt("Too high! Try again:"))
    } else if (userGuess < randomNumber) {
        userGuess = Number(prompt("Too low! Try again:"))
    } else {
        userGuess = Number(prompt("Guess the number from 1-10. Try again:"))
    }
}

if(userGuess === 999) {
    alert(`Exited game due to the input of 999, you tried ${userAttempts} times.`)
} else {
    userAttempts += 1
    alert(`Congratulations, you have guessed the number in ${userAttempts} attempts!`)
}