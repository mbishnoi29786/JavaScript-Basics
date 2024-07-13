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
    document.getElementById('name').value = ('');
    document.getElementById('email').value = ('');
    document.getElementById('phone').value = ('');
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
    let searchKeyword = document.getElementById('searchAllCurrentUsers').value.toLowerCase();
    /*  using for loop -->
    let filteredUsers = [];
    for(let i = 0; i<existingUsers.length; i++){
        //to increate readability we can also use it like
        let name = existingUsers[i].name.toLowerCase();
        let email = existingUsers[i].email.toLowerCase();
        let phone = existingUsers[i].phone;
        
        
        // if(existingUsers[i].name.toLowerCase().includes(searchKeyword) || existingUsers[i].email.toLowerCase().includes(searchKeyword) || existingUsers[i].phone.includes(searchKeyword)){
            // filteredUsers.push(existingUsers[i]);
        // }
        
        
        if(name.includes(searchKeyword) || email.includes(searchKeyword) || phone.includes(searchKeyword) ){
            filteredUsers.push(existingUsers[i]);
        }
        updateExistingUser(filteredUsers);
        }
        */
        
        // using arrays method filter 
        let filterMethod = existingUsers.filter(filteredUsers1 =>{
            return filteredUsers1.name.toLowerCase().includes(searchKeyword) || 
            filteredUsers1.email.toLowerCase().includes(searchKeyword) ||
            filteredUsers1.phone.toLowerCase().includes(searchKeyword)
        })
        updateExistingUser(filterMethod);
        
}