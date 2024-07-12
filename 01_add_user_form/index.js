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
    // console.log(newUser);

    existingUsers = [...existingUsers, newUser]
    updateExistingUser(existingUsers)
}


function updateExistingUser(users){
    let tableBody = document.getElementById('allUsersTableBody');
    let allUsers = users;
    console.log(allUsers.length);
      // Clear existing rows if any
        tableBody.innerHTML = '';
    for(let i =0 ; i<allUsers.length; i++){
        let newRow = tableBody.insertRow();
        let newCell1 = newRow.insertCell(0);
        let newCell2 = newRow.insertCell(1);
        let newCell3 = newRow.insertCell(2);
        newCell1.textContent = allUsers[i].name;
        newCell2.textContent = allUsers[i].email;
        newCell3.textContent = allUsers[i].phone;
    }
}

// to search users

document.getElementById('searchAllCurrentUsers').addEventListener('input', searchUsers);

function searchUsers(){
    let searchKeyword = document.getElementById('searchAllCurrentUsers').value;
    
    for(let i = 0; i<existingUsers.length; i++){

    }


    function newSearch(){

    }

}