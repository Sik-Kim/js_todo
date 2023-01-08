const $todoForm = document.querySelector('#todo-form')
const $todoInput = $todoForm.querySelector('input')
const $todoListUl = document.querySelector('#todo-list')
const TODOS = 'todos'

let todos = []

function saveTodoInLocalStorage() {
    localStorage.setItem(TODOS, JSON.stringify(todos))
}

function deleteTodo(event) {
    const li = event.target.parentNode
    li.remove()
    todos = todos.filter((todo) => todo.id !== parseInt(li.id))
    saveTodoInLocalStorage()
}

function paintingTodo(newTodoObj) {
    const $li = document.createElement('li')
    const $span = document.createElement('span')
    const $spanForSpace = document.createElement('span')
    const $button = document.createElement('button')

    $span.textContent = newTodoObj.text
    $spanForSpace.textContent = ' '
    $button.textContent = '❌'
    $li.id = newTodoObj.id
    $todoInput.value = ''
    
    $li.append($span)
    $li.append($spanForSpace)
    $li.append($button)
    $todoListUl.append($li)

    // delete event
    $button.addEventListener('click', deleteTodo)
}

function handleTodo(event) {
    event.preventDefault()

    const newTodo = $todoInput.value

    // save todo in localstorage
    const newTodoObj = {
        id: Date.now(),
        text: newTodo,
    }
    todos.push(newTodoObj)
    saveTodoInLocalStorage()

    // painting todo
    paintingTodo(newTodoObj)
}

$todoForm.addEventListener('submit', handleTodo)

// local storage 저장된 todos 화면 불러오기
const todosInLocalStorage = localStorage.getItem(TODOS)
if (todosInLocalStorage) {
    todos = JSON.parse(todosInLocalStorage)
    todos.forEach((todo) => paintingTodo(todo))
}