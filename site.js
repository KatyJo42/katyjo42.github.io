const firstP = document.querySelector('p')
//console.log(firstP)

const nav = document.querySelector('nav')
nav.style.textDecoration = 'underline'


// const contactA = document.querySelector('#contact a')
// contactA.style.backgroundColor = "#3388ff"

document.addEventListener('click', (e) => {

const section = e.target.closest('section')
    if (section) {
    section.style.border = '2px solid rgb(12, 206, 21)'

    }

})

//Carousel 

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ].map(url => { (new Image()).src = url
    return url })

//grabbing all the image tags

const images = document.querySelectorAll('#carousel img')

let currentImage = 0

const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

if(images.length>0) {
    showImages()
}


const nextButton = document.querySelector('#next')
const prevButton = document.querySelector('#prev')

//element.addEventListener('event', function)

if(nextButton) {
    nextButton.addEventListener('click', () => {
    currentImage = (currentImage + 1) // do I need the length here?
    showImages()
})
}

if(prevButton) {
    prevButton.addEventListener('click', () => {
    currentImage = (currentImage - 1 + urls.length) %urls.length
    showImages()
})
}

//Auto changing images
setInterval(() => {
    //Code to run EVERY 5 seconds
    currentImage = (currentImage + 1) %urls.length
    showImages()
}, 5000)

showImages()


//TO-DO LIST

const addButton = document.getElementById('add')
const lists = document.getElementById('lists')
const textInput = document.querySelector('.textInput')

window.addEventListener('load', () => {
    getTodos().forEach(todo => createListItem(todo))
})

addButton.addEventListener('click', () => {
    const text = textInput.value.trim()
    if (!text) return

    const newTodo = { text, completed: false }
    createListItem(newTodo)
    saveTodos([...getTodos(), newTodo])
    textInput.value = ''
})

function getTodos() {
    return JSON.parse(localStorage.getItem('todo-list')) || []
}

function saveTodos(todos) {
    localStorage.setItem('todo-list', JSON.stringify(todos))
}

function createListItem(todo) {
    const li = document.createElement('li')
    li.textContent = todo.text
    li.style.textDecoration = todo.completed ? 'line-through': ''

    li.addEventListener('click', () => {
        todo.completed = !todo.completed
        li.style.textDecoration = todo.completed ? 'line-through' : ''
        updateTodoInStorage(todo.text, todo.completed)
    })

    lists.appendChild(li)
}

function updateTodoInStorage(text, completed) {
    const todos = getTodos().map(todo =>
        todo.text === text ? { ...todo, completed } : todo
    )
    saveTodos(todos)
}

// Get Random Pokemon

const getRandomPokemon = async()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    const response = await fetch(url)   
    const json = await response.json()
    return json
}
const renderPokemon = async(pokemonParam)=>{
    console.log(pokemonParam)
    
    const img = document.createElement('img')
    
    img.src = pokemonParam.sprites.front_default
    img.alt = pokemonParam.name

    img.style.width = '200px'  
    img.style.height = '200px'
    
    const pokemonElement = document.getElementById('pokemon')
    pokemonElement.append(img)
}

const initPage = async () => {
    const randomPokemon = await getRandomPokemon()
    renderPokemon(randomPokemon)
}
initPage()




    