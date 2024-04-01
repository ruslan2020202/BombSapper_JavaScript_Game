function comeToGame(){
    window.location.href = '../template/game.html'
}

let btnPlay = document.getElementById('btnPlay')
let clickMenuSound = document.getElementById('clickMenu')

btnPlay.addEventListener('click', ()=>{
    setTimeout(comeToGame, 500)
})

let soundMenu = document.getElementById('1')

window.addEventListener('DOMContentLoaded', soundMenu.play())