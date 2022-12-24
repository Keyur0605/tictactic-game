let bgmusic = new Audio("music.mp3")
let turn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let tuns = "X";
let isgameover = false;
//Function Change turns
const changeTuns = () => {
    return tuns === "X" ? "0" : "X"
}

//Function to check  for a Win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let win = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],

    ]
    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";

        }
    })
}

let box = document.getElementsByClassName("box");
Array.from(box).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click', () => {
        // bgmusic.play()
        if (boxtext.innerText === "") {
            boxtext.innerText = tuns;
            tuns = changeTuns()
            turn.play()
            
            checkwin()
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + tuns;
            }
        }
    })
})

//Reset Game Logic


reset.addEventListener('click', () => {
    let boxes = document.querySelectorAll('.boxtext')
    Array.from(boxes).forEach(e => {
        e.innerText = " ";
        tuns = "X"
        isgameover = false;
        document.getElementsByClassName("info")[0].innerText = "Turn for " + tuns;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector(".line").style.width = "0vw";
    })
})

