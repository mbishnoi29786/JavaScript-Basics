let existingUsers = [ ] ;

document.getElementById('submitButton').addEventListener('click', addUser)

function addUser(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let newUser = {
        name: name,
        email: email,
        phone: phone
    }
    console.log(newUser);
    // Check if existingUsers is an array, if not reinitialize it
    if (!Array.isArray(existingUsers)) {
        existingUsers = [];
    }

    existingUsers = [...existingUsers, newUser]
    console.log(existingUsers);
}
