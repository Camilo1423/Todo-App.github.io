const signUp = document.querySelector('#signUp-form')
const signIn = document.querySelector('#signIn-form')

signIn.addEventListener('submit', e => {
    e.preventDefault()
    const email = document.querySelector('#signInEmail').value
    const password = document.querySelector('#signInPassword').value
    console.log(email, password)
})
signUp.addEventListener('submit', e => {
    e.preventDefault()
    const email = document.querySelector('#signUpEmail').value
    const password = document.querySelector('#signUpPassword').value
    console.log(email, password)
})