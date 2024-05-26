$(document).ready(function() {
    // Event listener for form submission
    $('#expensesForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const id = parseInt($('#id').val());
        const name = $('#name').val();
        const itemUsedId = parseInt($('#item_used_id').val());
        const quantity = parseFloat($('#quantity').val());
        $('#date').val(response.date ? new Date(response.date).toISOString().split('T')[0] : '');
        const miscellanousCosts = parseInt($('#miscellanous_costs').val());
        const remarks = $('#remarks').val();

        const formData = {
            id, name, item_used_id: itemUsedId, quantity, date,
            miscellanous_costs: miscellanousCosts, remarks
        };

        // Send AJAX POST request to add data to Expenses table
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5300/expenses',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                alert('Data added to Expenses table successfully');
                // Clear form fields after successful submission
                $('#expensesForm')[0].reset();
            },
            error: function(xhr, status, error) {
                console.error('Error adding data to Expenses table:', error);
                alert('Error adding data to Expenses table. Please try again.');
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
     url:` http://localhost:5300/expenses/${id}`,
     success: function(response) {
         console.log(response); // Log the entire response to inspect the format

         // Handle null or undefined values and format dates correctly
         $('#name').val(response.name || '');
         $('#item_used_id').val(response.item_used_id || '');
         $('#quantity').val(response.quantity || '');
         $('#date').val(response.date ? new Date(response.date).toISOString().split('T')[0] : '');
         $('#miscellanous_costs').val(response.miscellanous_costs || '');
         $('#remarks').val(response.remarks || '');

     },
     error: function(xhr, status, error) {
         console.error('Error fetching Expenses data:', error);
         alert('Error fetching Expenses data. Please try again.');
     }
 });
});

// Event listener for Update button
$('#upBtn').click(function(event) {
 // Get form data
 const id = parseInt($('#id').val());
 const name = $('#name').val();
 const item_used_id = parseInt($('#item_used_id').val());
 const quantity = parseInt($('#quantity').val());
 const date = $('#date').val();
 const miscellanous_costs = parseInt($('#miscellanous_costs').val());
 const remarks = $('#remarks').val();



 if (isNaN(id)  || !name || isNaN(item_used_id) || isNaN(quantity) || !date  || isNaN(miscellanous_costs)  || !remarks)  {
     alert('Please fill out all fields correctly');
     return;
 }

 // Create an object with the form data
 const formData = { id, name, item_used_id, quantity, date, miscellanous_costs,remarks };

 // Send AJAX PUT request to update data in the Expenses table
 $.ajax({
     type: 'PUT',
     url:` http://localhost:5300/expenses/${id}`,
     data: JSON.stringify(formData),
     contentType: 'application/json',
     success: function(response) {
         alert('Expenses  data updated successfully');
     },
     error: function(xhr, status, error) {
         console.error('Error updating Expenses data:', error);
         alert('Error updatingExpenses data. Please try again.');
     }
 });
});
