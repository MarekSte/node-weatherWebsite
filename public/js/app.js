const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
let messageOne = document.querySelector('#message-1')
let messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    search.value = ''
    messageOne.textContent = 'Loading your weather'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?adress=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = 'Your weather for: ' + data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
}) 
