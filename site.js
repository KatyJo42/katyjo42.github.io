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

//To-Do List

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []


// Add a new item to the list
todos.push({ text: input.value, completed: false })



// Save the list to local storage
localStorage.setItem('todo-list', JSON.stringify(todos))

[
    { "text": "Buy milk", "completed": false },
    { "text": "Walk the dog", "completed": false },
    { "text": "Do homework", "completed": false }
]

// Clear the li's before we recreate them
todoList.innerHTML = ''

// Create and add new list items to the DOM
const li = document.createElement('li')
li.textContent = todo.text
todoList.append(li)
    
        


   

    //Add New Todo Button
   


    loadTodos()

    const img = document.createElement('img')
    img.src = // url of the image from the 'front_default' property
    img.alt = // name of the pokemon
    parentElement.append(img)

    const getRandomPokemon = async () => {
        try {
            
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150) + 1)
            const data = await response.json()
            
            // Get the Pokémon name and image URL
            const pokemonName = data.name
            const pokemonImageUrl = data.sprites.front_default
            
            console.log(`Random Pokémon: ${pokemonName}`)
            
            // Get the container element to display the data
            const container = document.getElementById('pokemon-container')
            
            // Clear previous content in the container
            container.innerHTML = ''
            
            // Create an image element
            const img = document.createElement('img')
            img.src = pokemonImageUrl  
            img.alt = pokemonName      
            
            // Append the image to the container
            container.append(img)
            
            // display the name of Pokémon below 
            const nameElement = document.createElement('p')
            nameElement.textContent = `Name: ${pokemonName}`
            container.append(nameElement)
    
        } catch (error) {
            console.error('Error fetching Pokémon:', error)
        }
    };
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)

    renderPokemon
    // Pokémon button event listener
    const pokemonButton = document.querySelector('button[onclick="getRandomPokemon()"]')
    if (pokemonButton) {
        pokemonButton.addEventListener('click', getRandomPokemon)
    }
    