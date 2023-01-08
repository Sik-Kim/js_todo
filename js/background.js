IMGS = ['0.png', '1.jpeg', '2.jpeg', 'namu.png']

const imageByRandom = IMGS[Math.floor(Math.random() * IMGS.length)]

const $bg = document.createElement('img')
$bg.src = `img/${imageByRandom}`

document.body.append($bg)