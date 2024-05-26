
$(document).ready(function() {
    // Event listener for form submission
    $('#supplimentForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const id = $('#id').val();
        const name = $('#name').val();
        const item_id = parseInt($('#item_id').val());
        const quantity = parseInt($('#quantity').val());
        const unit = $('#unit').val();
        const purchase_date = $('#purchase_date').val();

        const formData = {
            id, name, item_id, quantity, unit, purchase_date
        };

        // Send AJAX POST request to add data to Suppliment table
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5300/suppliment',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                alert('Data added to Suppliment table successfully');
                // Clear form fields after successful submission
                $('#supplimentForm')[0].reset();
            },
            error: function(xhr, status, error) {
                console.error('Error adding data to Suppliment table:', error);
                alert('Error adding data to Suppliment table. Please try again.');
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
     url:` http://localhost:5300/suppliment/${id}`,
     success: function(response) {
         console.log(response); // Log the entire response to inspect the format

         // Handle null or undefined values and format dates correctly
         $('#name').val(response.name || '');
         $('#item_id').val(response.item_id || '');
         $('#quantity').val(response.quantity || '');
         $('#unit').val(response.unit || '');
         $('#purchase_date').val(response.purchase_date ? new Date(response.purchase_date).toISOString().split('T')[0] : '');
     },
     error: function(xhr, status, error) {
         console.error('Error fetching suppliment data:', error);
         alert('Error fetching suppliment data. Please try again.');
     }
 });
});

// Event listener for Update button
$('#upBtn').click(function(event) {
 // Get form data
 const id = parseInt($('#id').val());
 const name = $('#name').val();
 const item_id = parseInt($('#item_id').val());
 const quantity = parseInt($('#quantity').val());
 const unit = $('#unit').val();
 const purchase_date = $('#purchase_date').val();

 if (isNaN(id) || isNaN(item_id) || isNaN(quantity) || !name || !unit || !purchase_date) {
     alert('Please fill out all fields correctly');
     return;
 }

 // Create an object with the form data
 const formData = { id, name, item_id, quantity, unit, purchase_date };

 // Send AJAX PUT request to update data in the Forage table
 $.ajax({
     type: 'PUT',
     url:` http://localhost:5300/suppliment/${id}`,
     data: JSON.stringify(formData),
     contentType: 'application/json',
     success: function(response) {
         alert('Suppliment data updated successfully');
     },
     error: function(xhr, status, error) {
         console.error('Error updating suppliment data:', error);
         alert('Error updating suppliment data. Please try again.');
     }
 });
});
