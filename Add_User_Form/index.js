let existingUsers = [] ;

document.getElementById('submitButton').addEventListener('click', addUser)


function addUser() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let newUser = {
        name: name,
        email: email,
        phone: phone
    }
    console.log(newUser);
    existingUsers = [...existingUsers, newUser]
    console.log(existingUsers);
}
