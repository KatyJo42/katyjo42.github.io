
const firstP = document.querySelector('p')
console.log(firstP)


const nav = document.querySelector('nav')
nav.style.textDecoration = 'underline'

const contactA = document.querySelector('#contact a')
contactA.style.backgroundColor = "#3388ff"

// Greeting 
const hours = new Date().getHours(); 

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
].map(url => { (new Image()).src = url; 
    return url })

//grabbing all the image tags

const images = document.querySelectorAll('#carousel img')
let currentImage = 0

const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
        console.log('Image src set to:', image.src)
    })
}

if (images.length > 0) {
    showImages()
}

const nextButton = document.querySelector('#next')
const prevButton = document.querySelector('#prev')

//element.addEventListener('event', function)

if (nextButton) {
    nextButton.addEventListener('click', () => {
        currentImage = (currentImage + 1) % urls.length
        showImages()
    })
    
}

if (prevButton) {
    prevButton.addEventListener('click', () => {
        currentImage = (currentImage - 1 + urls.length) % urls.length
        showImages()
    })
    
} 

//Auto changing images
setInterval(() => {
    //Code to run EVERY 5 seconds
    currentImage = (currentImage + 1) % urls.length
    showImages()
}, 5000)


// To-Do List

document.addEventListener("DOMContentLoaded", () => {
    const todoList = document.getElementById("todo-list")
    const newTodoInput = document.getElementById("new-todo")
    const addButton = document.getElementById("add-button")

    //load todo from localStorage
    const loadTodos = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || []
        renderTodos(todos)
    }

    //Save todos to localStorage
    const saveTodos = (todos) => {
        localStorage.setItem("todo-list", JSON.stringify(todos))
    }

    //Render todos to the DOM 
    const renderTodos = (todos) => {
        todoList.innerHTML = "" // Clear the list before rendering

        todos.forEach((todo, index) => {
            const li = document.createElement("li")
            li.textContent = todo.text
            li.classList.add("todo")
    
            // Toggle completed task style
            if (todo.completed) {
                li.style.textDecoration = "line-through";
            }
    
            // Toggle the completed status on click
            li.addEventListener("click", () => {
                todo.completed = !todo.completed
                saveTodos(todos)  // Save  updated todos to localStorage
                renderTodos(todos)  // Re-render  updated todos list
            });
    
            // Creat and add Delete button
            const deleteButton = document.createElement("button")
            deleteButton.textContent = "Delete"
            deleteButton.classList.add("delete")
            deleteButton.addEventListener("click", () => {
                e.stopPropagations()
                const updatedTodos = todos.filter(t => t !== todo)
                saveTodos(updatedTodos)  
                renderTodos(updatedTodos)  
            })
    
            li.appendChild(deleteButton)
            todoList.appendChild(li)
        })
    }

    // Add New Todo Button
    addButton.addEventListener("click", () => {
        const todoText = newTodoInput.value.trim();
        if (todoText !== "") {
            const todos = JSON.parse(localStorage.getItem("todo-list")) || []
            todos.push({ text: todoText, completed: false })
            saveTodos(todos)
            renderTodos(todos)
            newTodoInput.value = ""
        }
    })

    loadTodos()

})


