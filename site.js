
const firstP = document.querySelector('p')
console.log(firstP)

alert("hey! Howdy! hey!")

const nav = document.querySelector('nav')
nav.style.textDecoration = 'underline'

const contactA = nav.querySelector('#contact #about')
contactA.style.backgroundColor = "#3388ff"



document.addEventListener('click', (e) => {
    const section = e.target.closest('section')
    section.style.border = '2px rgb(12, 206, 21)'
})
