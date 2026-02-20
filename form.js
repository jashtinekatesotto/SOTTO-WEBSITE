let users = []; // Array to store all users

function save() {
    const firstName = document.getElementById('FName').value;
    const middleName = document.getElementById('MName').value;
    const surname = document.getElementById('SName').value;
    const age = document.getElementById('Age').value;
    const email = document.getElementById('Email').value;

    if (firstName === "" || surname === "" || email === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in the required fields!',
            confirmButtonColor: '#333'
        });
        return;
    }

    // Create user object
    const user = {
        firstName,
        middleName,
        surname,
        age,
        email
    };

    // Add user to array
    users.push(user);

    // Display all users using loop
    displayUsers();

    Swal.fire({
        icon: 'success',
        title: 'User Saved!',
        text: 'The information has been added to the table.',
        timer: 2000,
        showConfirmButton: false
    });

    clearInputs();
}

function displayUsers() {
    const tableBody = document.getElementById('Table');
    tableBody.innerHTML = ""; // Clear table first

    // 🔁 LOOP HERE
    for (let i = 0; i < users.length; i++) {
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${users[i].firstName}</td>
            <td>${users[i].middleName}</td>
            <td>${users[i].surname}</td>
            <td>${users[i].age}</td>
            <td>${users[i].email}</td>
        `;

        tableBody.appendChild(newRow);
    }
}

function clearInputs() {
    document.getElementById('FName').value = "";
    document.getElementById('MName').value = "";
    document.getElementById('SName').value = "";
    document.getElementById('Age').value = "";
    document.getElementById('Email').value = "";
}