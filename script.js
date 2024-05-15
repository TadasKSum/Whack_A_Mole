const game = document.querySelector(".gameBoard")

let holesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let mole = 1;

function showMole() {
    game.innerHTML = ""

    holesArray.forEach(hole => {
        const el = document.createElement("div")
        el.classList.add("cell")
        el.setAttribute("id", hole)
        game.append(el)
    })
}

showMole()