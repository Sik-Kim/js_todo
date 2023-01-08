const $loginForm = document.querySelector('#login-form')
const $loginInput = $loginForm.querySelector('input')

USERNAME = 'username'

function saveUsernameInLocalStorage(username) {
    localStorage.setItem(USERNAME, username)
}

function paintingUsername(username) {
    const $h1 = document.createElement('h1')
    $h1.innerText = `Hello ${username}`
    $loginForm.append($h1)
    $loginInput.type = 'hidden'
}

function submitUsername(event) {
    event.preventDefault()

    const username = $loginInput.value

    // username 화면 넣기
    paintingUsername(username)

    // 로컬 스토리지 저장
    saveUsernameInLocalStorage(username)
}

$loginForm.addEventListener('submit', submitUsername)

// local storage 저장된 username 화면 불러오기
const usernameInLocalStorage = localStorage.getItem(USERNAME)
if (usernameInLocalStorage) {
    paintingUsername(usernameInLocalStorage)
}