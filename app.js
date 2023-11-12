//DOM contents accessed
let gameArena = document.querySelector('.game-arena')
let gameResult = document.querySelector('#result')
let playBtn = document.querySelector("#button")

//Defined variables
let xcombinations = []
let oCombinations = []
let turn = false
let moves = 0
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


//To check the result
function checkResult(attempts, player) {
    for (let i = 0; i < winPatterns.length; i++) {
        const pattern = winPatterns[i]
        if (pattern.every(position => attempts.includes(position))) {
            gameResult.style.visibility = "visible"
            message.innerHTML = "'" + player + "'" + " Won the game!"
            return;
        } else {
            if (moves == 9) {
                gameResult.style.visibility = 'visible'
                message.innerHTML = "It is a Draw!"
                return;
            }
        }
    }
}
//To ensure no already clicked tile is clicked again
function checkTile(tile) {
    let flag = true
    if (tile.classList.contains('game-arena'))
        flag = false
    if (tile.classList.contains('clicked'))
        flag = false
    return flag
}

//Event listener to handle clicks on tile
gameArena.addEventListener('click', function (event) {    
    let tile = event.target
    console.log(tile)
    if (checkTile(tile)) {
        moves++
        tile.classList.add('clicked');
        console.log(event.target.className)
        let id = parseInt(event.target.id)
        if (turn == false) {
            tile.innerText = "X"
            turn = true
            xcombinations.push(id)
            console.log(xcombinations)
            checkResult(xcombinations, 'X')
        }
        else {
            tile.innerText = "O"
            turn = false
            oCombinations.push(id)
            console.log(oCombinations)
            checkResult(oCombinations, 'O')
        }

    }
}, true)

//To handle the replay button
playBtn.addEventListener('click', function () {
    location.reload()
})