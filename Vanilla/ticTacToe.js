const container = document.getElementById("container");
const turnInd = document.querySelector("#turn-indicator");
const buttons = document.querySelectorAll(".btn");
let currState = new Array(9).fill(0); // 0: empty, 1: computer (X), 2: user (O)
let userScore = 0;
let compScore = 0;

const userScoreDisplay = document.getElementById("user-score");
const compScoreDisplay = document.getElementById("comp-score");
const difficultyToggleBtn = document.getElementById("difficulty-toggle");

let isAdvancedMode = false;

function restart() {
    currState.fill(0);
    buttons.forEach((button) => {
        button.textContent = "";
        button.disabled = false;
        button.style.color = "#292F36";
    });

    difficultyToggleBtn.textContent = isAdvancedMode ? "Advanced" : "Easy";

    turnInd.textContent = "Your Turn 😎";
    container.style.pointerEvents = "auto";
}

function checkWin(player) {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // Rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // Columns
        [0, 4, 8],
        [2, 4, 6], // Diagonals
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            currState[a] === player &&
            currState[b] === player &&
            currState[c] === player
        ) {
            return pattern; // win pattern
        }
    }
    return null;
}

function checkDraw() {
    return currState.every((cell) => cell !== 0);
}

function endGame(message, winner) {
    turnInd.textContent = message;
    container.style.pointerEvents = "none";
    buttons.forEach((button) => (button.disabled = true));

    if (winner === "user") {
        userScore++;
        userScoreDisplay.textContent = userScore;
    } else if (winner === "comp") {
        compScore++;
        compScoreDisplay.textContent = compScore;
    }
}

function findBestMove(player) {
    for (let i = 0; i < 9; i++) {
        if (currState[i] === 0) {
            currState[i] = player;
            if (checkWin(player)) {
                currState[i] = 0;
                return i;
            }
            currState[i] = 0;
        }
    }

    const opponent = player === 1 ? 2 : 1;
    for (let i = 0; i < 9; i++) {
        if (currState[i] === 0) {
            currState[i] = opponent;
            if (checkWin(opponent)) {
                currState[i] = 0; // Revert
                return i;
            }
            currState[i] = 0; // Revert
        }
    }

    if (currState[4] === 0) return 4;

    const corners = [0, 2, 6, 8];
    for (let corner of corners) {
        if (currState[corner] === 0) return corner;
    }

    const sides = [1, 3, 5, 7];
    for (let side of sides) {
        if (currState[side] === 0) return side;
    }

    return -1;
}

function computer() {
    turnInd.textContent = "💻 Comp thinking it's choice";
    turnInd.classList.add("thinking");
    container.style.pointerEvents = "none";

    const availableMoves = currState
        .map((val, idx) => (val === 0 ? idx : -1))
        .filter((idx) => idx !== -1);

    if (availableMoves.length === 0) {
        endGame("It's a Draw! 🤝");
        turnInd.classList.remove("thinking");
        return;
    }

    setTimeout(() => {
        let num;
        if (isAdvancedMode) {
            num = findBestMove(1);
        } else {
            do {
                num = Math.floor(Math.random() * 9);
            } while (currState[num] !== 0);
        }

        buttons[num].textContent = "X";
        buttons[num].disabled = true;
        currState[num] = 1;

        buttons[num].classList.add("move-highlight");
        setTimeout(() => {
            buttons[num].classList.remove("move-highlight");
        }, 500);

        turnInd.classList.remove("thinking");

        const compWinningPattern = checkWin(1);
        if (compWinningPattern) {
            compWinningPattern.forEach(
                (idx) => (buttons[idx].style.color = "green")
            );
            endGame("Computer Wins! 🤖", "comp");
        } else if (checkDraw()) {
            endGame("It's a Draw! 🤝");
        } else {
            container.style.pointerEvents = "auto";
            turnInd.textContent = "Your Turn 😎";
        }
    }, 1500);
}

document.querySelector("#restart").addEventListener("click", () => {
    restart();
});

difficultyToggleBtn.addEventListener("click", () => {
    isAdvancedMode = !isAdvancedMode;
    difficultyToggleBtn.textContent = isAdvancedMode ? "Advanced" : "Easy";
});

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn")) {
        event.target.textContent = "O";
        currState[parseInt(event.target.id) - 1] = 2;
        buttons[parseInt(event.target.id) - 1].disabled = true;

        const userWinningPattern = checkWin(2);
        if (userWinningPattern) {
            userWinningPattern.forEach(
                (idx) => (buttons[idx].style.color = "green")
            );
            endGame("You Win! 🎉", "user");
        } else if (checkDraw()) {
            endGame("It's a Draw! 🤝");
        } else {
            computer();
        }
    }
});
