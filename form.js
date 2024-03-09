const form = document.getElementById('myForm');
    const tableBody = document.querySelector('#dataTable tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.getElementById('gender').value;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        // Get selected food options
        const selectedFoodOptions = document.querySelectorAll('#foodList input[type="checkbox"]:checked');
        
        // Check if exactly 2 food options are selected
        if (selectedFoodOptions.length !== 2) {
            alert('Please select exactly 2 food options.');
            return; // Prevent form submission
        }

        // Extract selected food options
        const food = Array.from(selectedFoodOptions).map(option => option.value).join(', ');

        // Create table row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${food}</td>
            <td>${state}</td>
            <td>${country}</td>
        `;

        // Append new row to the table
        tableBody.appendChild(newRow);

        // Clear form fields
        form.reset();
    });