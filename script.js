const submit = document.getElementById('submit')
const email = document.querySelector('input')
const validationMessage = document.querySelector('.validation')

submit.addEventListener('click', (e) => {
  e.preventDefault()
  if (validateEmail(email.value)) {
    email.value = ''
    validationMessage.classList.add('hidden')
  } else {
    console.log(false)
    validationMessage.classList.remove('hidden')
  }
})

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}