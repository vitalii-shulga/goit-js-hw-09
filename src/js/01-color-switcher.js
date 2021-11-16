const body = document.querySelector('body')
const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')

let timerId
stopBtn.disabled = true

startBtn.addEventListener('click', () => {
  timerId = setInterval(backgroundChangeColor, 1000)
  startBtn.disabled = true
  stopBtn.disabled = false
})

stopBtn.addEventListener('click', () => {
  clearInterval(timerId)
  startBtn.disabled = false
  stopBtn.disabled = true
})

function backgroundChangeColor() {
  const newColor = getRandomHexColor()
  body.style.backgroundColor = newColor
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
