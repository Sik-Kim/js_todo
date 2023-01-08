const $clockH2 = document.querySelector('#clock')

function getCurrentTime() {
    const now = new Date()
    let a = String(now.getHours()).padStart(2, '0')
    let b = String(now.getMinutes()).padStart(2, '0')
    let c = String(now.getSeconds()).padStart(2, '0')
    $clockH2.innerText = `${a}:${b}:${c}`
}

getCurrentTime()
setInterval(getCurrentTime, 1000)