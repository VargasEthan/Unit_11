function userName() {
    var name = prompt("Hello, what is your name?")
    return name
}

function greetings(l) {
    alert(`Greetings ${l}, to the 20 game!!`)
}

greetings(userName()) 

function rules() {
    alert(`Is this game, the player(you) will go against an opponent(computer) and see who will get the closest to 20 without going over. Whoever is closer or, guesses 20, will win the game. Simple right?`)
}

rules()

function ran() {
    var number = Math.floor(Math.random() * 10 ) + 1 
    return number 
}

alert(`The computer will go first`)

function gameC() {
    do {
    
        var computer = computer + ran()

    alert(`The copmuter got: ${computer}. Press "enter" to continue.`)

} while (gameC <= 16) 
    return computer
}

function gameH() {
        do {

            var human = human + ran()

            alert(`You got: ${human} copmuter's score was: ${computer}. Press "enter" to continue.`)

        }while (gameH <= 16) 
        return human
}

