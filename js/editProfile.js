// Get data from localstrage
let user_name = localStorage.username;
let user_email = localStorage.email;

// VArialbles
let user_input = document.getElementById('change-name')
let email_input = document.getElementById('change-email')
let edit_form = document.getElementById('edit-profile-form')

// Setting values op input
user_input.value = user_name;
email_input.value = user_email;

// Events
edit_form.addEventListener('submit', editProfile)

function editProfile(e) {
    e.preventDefault()

    localStorage.username = user_input.value
    localStorage.email = email_input.value

    setTimeout(() => {
        window.location = 'profile.html'
    }, 500);
}