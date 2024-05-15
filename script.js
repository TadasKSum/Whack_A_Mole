const game = document.querySelector(".gameBoard")

let holesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let mole = 4;

function showMole() {
    game.innerHTML = ""

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
        }
    })
}

showMole()