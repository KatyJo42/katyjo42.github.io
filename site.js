// storing in local storage
localStorage.setItem("It's a secret to everybody.", "Zelda is the princess!");

const firstP = document.querySelector('p')
console.log(firstP)


const nav = document.querySelector('nav')
nav.style.textDecoration = 'underline'

const contactA = nav.querySelector('#contact #about')
contactA.style.backgroundColor = "#3388ff"

const hours = new Date().getHours(); 


document.addEventListener('click', (e) => {
    const section = e.target.closest('section')
    section.style.border = '2px rgb(12, 206, 21)'
})
