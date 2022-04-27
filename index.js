const message = document.querySelector('#message')

const addName = event => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let person = document.createElement('li')
    let personName = document.createElement('span')
    personName.textContent = inputField.value
    personName.addEventListener('click',crossOffName)
    person.appendChild(personName)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteName)
    document.querySelector('ul').appendChild(person)
    person.appendChild(deleteBtn)
    inputField.value = ''
}

const deleteName = event => {
    const personName = event.target.parentNode.firstChild.textContent
    event.target.parentNode.remove()
    message.textContent = `${personName} has been removed.`
    revealMessage()
}

const crossOffName = event => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} has been beaten!`
    } else {
        message.textContent = `${event.target.textContent} must be beat again!!`
    }
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    },1000)
}

document.querySelector('form').addEventListener('submit', addName);