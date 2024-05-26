
$(document).ready(function() {
    // Event listener for form submission
    $('#productionForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const id = parseInt($('#id').val());
        const animal_tag = $('#animal_tag').val();
        const name = $('#name').val();
        const item_id = parseInt($('#item_id').val());
        const quantity = parseInt($('#quantity').val());
        const production_date = $('#production_date').val();

        const formData = { id, animal_tag, name, item_id, quantity, production_date };

        // Send AJAX POST request to add data to Production table
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5300/production', // Adjust URL according to your backend endpoint
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                alert('Data added to Production table successfully');
                // Clear form fields after successful submission
                $('#productionForm')[0].reset();
            },
            error: function(xhr, status, error) {
                console.error('Error adding data to Production table:', error);
                alert('Error adding data to Production table. Please try again.');
            }
        });
    });
});

// Event listener for Get Data button
$('#getBtn').click(function(event) {
const id = parseInt($('#id').val());
if (!id) {
 alert('Please enter an ID');
 return;
}

// Send AJAX GET request to fetch data from the Forage table by ID
$.ajax({
 type: 'GET',
 url:` http://localhost:5300/production/${id}`,
 success: function(response) {
     console.log(response); // Log the entire response to inspect the format

     // Handle null or undefined values and format dates correctly
     $('#animal_tag').val(response.animal_tag || '');
     $('#name').val(response.name || '');
     $('#item_id').val(response.item_id || '');
     $('#quantity').val(response.quantity || '');
     $('#production_date').val(response.production_date ? new Date(response.production_date).toISOString().split('T')[0] : '');
 },
 error: function(xhr, status, error) {
     console.error('Error fetching production data:', error);
     alert('Error fetching production data. Please try again.');
 }
});
});

// Event listener for Update button
$('#upBtn').click(function(event) {
// Get form data
const id = parseInt($('#id').val());
const animal_tag = $('#animal_tag').val();
const name = $('#name').val();
const item_id = parseInt($('#item_id').val());
const quantity = parseInt($('#quantity').val());
const production_date = $('#production_date').val();

if (isNaN(id) || !(animal_tag) || !name || isNaN(item_id) || isNaN(quantity) || !production_date) {
 alert('Please fill out all fields correctly');
 return;
}

// Create an object with the form data
const formData = { id, animal_tag, name, item_id, quantity, production_date };

// Send AJAX PUT request to update data in the production table
$.ajax({
 type: 'PUT',
 url:` http://localhost:5300/production/${id}`,
 data: JSON.stringify(formData),
 contentType: 'application/json',
 success: function(response) {
     alert('Production data updated successfully');
 },
 error: function(xhr, status, error) {
     console.error('Error updating production data:', error);
     alert('Error updating production data. Please try again.');
 }
});
});
