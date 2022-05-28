const form = document.querySelector('.login-form');
// const emailEl = document.querySelector('input[type="email"]').value;
// const passwordEl = document.querySelector('input[type="password"]').value;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTurget);
    console.log(formData);

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert('All fields must be filled!');
    }
    
    document.querySelector('.login-form').reset();
}