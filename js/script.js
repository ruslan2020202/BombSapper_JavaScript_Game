const screenDisplay = document.querySelector('.screen')
const code = String(Math.floor(Math.random() * (10000 - 1000) + 1000))
console.log(code)
let codeNew = code
const buttons = document.querySelector('.footer')
let timer = document.querySelector('.timer')
const endTime = Number(String(Date.now()).slice(0, 10)) + 50
screenDisplay.textContent = '****'
let btnIndecator = document.querySelector('.btn-on')
const musicGame = new Audio('../sound/sound_game.mp3')
musicGame.play()
musicGame.volume = 0.3
const soundGame = new Audio('../sound/bomb_full.mp3')
soundGame.play()
const clickSoundBtn = new Audio('../sound/bomb_btn.mp3')
const bombDef = new Audio('../sound/bomb_stop.mp3')
console.log(musicGame)

function checkCode(val){
    if(val == codeNew[0]){
        screenDisplay.textContent = `${code.slice(0, code.length - codeNew.length + 1)}${'*'.repeat(codeNew.length - 1)}`
        codeNew = codeNew.slice(1, codeNew.length)
    }
}


function alertLose(){
    // gameOver.play()
    alert('You lose!')
    window.location.href = '../template/index.html'

}

function alertWin(){
        // gameOver.play()
        alert('You win!')
        window.location.href = '../template/index.html'
}

buttons.addEventListener('click', (event)=>{
    if(event.target.value){
        clickSoundBtn.play()
        checkCode(event.target.value)
    }
})

function updaterTime() {
    let currentTime = Number(String(Date.now()).slice(0, 10))
    let remainingTime = endTime - currentTime
    if (remainingTime <= 0) {
        clearInterval(timerInterval)
        screenDisplay.textContent = 'GAMEOVER'
        setTimeout(alertLose, 1000)
    } else {
        if(screenDisplay.textContent === code){
            screenDisplay.textContent = 'UNLOCK'
            btnIndecator.style.background = 'green'
            bombDef.play()
            musicGame.pause()
            soundGame.pause()
            setTimeout(alertWin, 1000)
        }
        let minutes = Math.floor(remainingTime / 60)
        let seconds = remainingTime % 60
        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        timer.innerText = `${minutes}:${seconds}`
    }
}

let timerInterval = setInterval(updaterTime, 1000)
updaterTime()