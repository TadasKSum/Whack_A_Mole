const game = document.querySelector(".gameBoard")
const showPoints = document.querySelector(".points")

let holesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let mole = 0;
let gamePoints = 0;
let moleTimer

function showMole() {
    game.innerHTML = ""
    showPoints.innerHTML = "Points: "+gamePoints

    holesArray.forEach(hole => {
        const el = document.createElement("div")
        el.classList.add("cell")
        el.classList.add("d-flex")
        el.setAttribute("id", hole)
        game.append(el)
    })

    const gameHoles = document.querySelectorAll(".cell")

    gameHoles.forEach((cell, index) => {
        if(mole === Number(cell.id)) {
            const el = document.createElement("div")
            el.classList.add("mole")
            cell.append(el)

            const moleTarget = document.querySelector(".mole")

            moleTarget.onclick = () => hitMole()
        }
    })
}

function hitMole() {
    gamePoints += 10;
    console.log(gamePoints)
}

function popMole() {
    let molePosition = Math.ceil(Math.random()*9)
    mole = molePosition;
}

popMole()
showMole()

moleTimer = setInterval(() => {
    popMole()
    showMole()
}, 700)