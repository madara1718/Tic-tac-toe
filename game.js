const spaces = document.getElementsByClassName('space');
const resetButton = document.getElementById('Reset');
let turn = 1;
const playerOne = {
    circle: '<img class="symbol" id="circle" src="imagenes/circle.png">',
    value: 'O'
}
const playerTwo = {
    ex: '<img class="symbol" id="x" src="imagenes/x.png">',
    value: 'X'
}

function win(position, symbol, { value }) {
    if (horizontalCount(position, symbol) || verticalCount(position, symbol) || firstDiagonalCount(position, symbol) ||
        secondDiagonalCount(position, symbol)) {
        alert(`The ${value} player won`);
        turn = 3;
    }
    else if (tie()) {
        alert("TIE!");
    }
}
function tie() {
    return Array.prototype.every.call(spaces, (item) => { return item.innerHTML !== '' });
}

function playSymbol() {
    let pos = 0;
    Array.prototype.forEach.call(spaces, (item, i) => {
        item.addEventListener('click', () => {
            if (turn === 1 && item.innerHTML === '') {
                item.innerHTML = playerTwo['ex'];
                turn = 2;
                win(pos = i, playerTwo['ex'], playerTwo);
            } else if (item.innerHTML === '' && turn === 2) {
                item.innerHTML = playerOne['circle'];
                turn = 1;
                win(pos = i, playerOne['circle'], playerOne);
            }
        })
    })
}

const horizontalCount = (position, symbol) => {
    let counter = 0;
    switch (position) {
        case 0:
        case 3:
        case 6:
            for (let i = position; i < position + 3; i++) {
                if (spaces[i].innerHTML === symbol) {
                    counter++;
                    if (counter === 3) {
                        console.log(true);
                        return true;
                    }
                }
            }
            break;
        case 1:
        case 4:
        case 7:
            if (spaces[position + 1].innerHTML === symbol && spaces[position - 1].innerHTML === symbol) {
                console.log(true);
                return true;
            }
            break;
        case 2:
        case 5:
        case 8:
            for (let i = position; i > position - 3; i--) {
                if (spaces[i].innerHTML === symbol) {
                    counter++;
                    if (counter === 3) {
                        console.log(true);
                        return true;
                    }

                }
            } break;
    }return false;
}
const verticalCount = (position, symbol) => {
    let counter = 0;
    switch (position) {
        case 0:
        case 1:
        case 2:
            for (let i = position; i < position + 7; i += 3) {
                if (spaces[i].innerHTML === symbol) {
                    counter++;
                    if (counter === 3) {
                        console.log(true);
                        return true;
                    }
                }
            }
            break;
        case 3:
        case 4:
        case 5:
            if (spaces[position + 3].innerHTML === symbol && spaces[position - 3].innerHTML === symbol) {
                console.log(true);
                return true;
            }
            break;
        case 6:
        case 7:
        case 8:
            for (let i = position; i > position - 7; i -= 3) {
                if (spaces[i].innerHTML === symbol) {
                    counter++;
                    if (counter === 3) {
                        console.log(true);
                        return true;
                    }

                }
            } break;
    }return false;
}

const firstDiagonalCount = (position, symbol) => {
    let counter = 0;
    switch (position) {
        case 0:
            for (let i = position; i < position + 9; i += 4) {
                if (spaces[i].innerHTML === symbol) {
                    counter++;
                    if (counter === 3) {
                        console.log(true);
                        return true;
                    }
                }
            }
            break;
        case 4:
            if (spaces[position + 4].innerHTML === symbol && spaces[position - 4].innerHTML === symbol) {
                console.log(true);
                return true;
            }
            break;
        case 8:
            for (let i = position; i > position - 9; i -= 4) {
                if (spaces[i].innerHTML === symbol) {
                    counter++;
                    if (counter === 3) {
                        console.log(true);
                        return true;
                    }
                }
            } break;
    }return false;
}

const secondDiagonalCount = (position, symbol) => {
    let counter = 0;
    switch (position) {
        case 2:
            for (let i = position; i < position + 5; i += 2) {
                if (spaces[i].innerHTML === symbol) {
                    counter++;
                    if (counter === 3) {
                        console.log(true);
                        return true;
                    }
                }
            }
            break;
        case 4:
            if (spaces[position + 2].innerHTML === symbol && spaces[position - 2].innerHTML === symbol) {
                console.log(true);
                return true;
            }
            break;
        case 6:
            for (let i = position; i > position - 5; i -= 2) {
                if (spaces[i].innerHTML === symbol) {
                    counter++;
                    if (counter === 3) {
                        console.log(true);
                        return true;
                    }
                }
            } break;
    }return false;
}

playSymbol();


