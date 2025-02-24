// storing in local storage
localStorage.setItem("It's a secret to everybody.", "Zelda is the princess!");

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
        section.style.border = '2px rgb(12, 206, 21)'
    }
})


//Carousel 

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

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

showImages()

const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

//element.addEventListener('event', function)

nextButton.addEventListener('click', () => {
    currentImage = (currentImage + 1) // do I need the length here?
    showImages()
})

prevButton.addEventListener('click', () => {
    currentImage = (currentImage - 1 )
    showImages()
})

//Auto changing images
setInterval(() => {
    //Code to run EVERY 5 seconds
    currentImage = (currentImage + 1) 
    showImages()
}, 5000)

