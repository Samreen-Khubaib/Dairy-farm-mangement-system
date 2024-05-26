
$(document).ready(function() {
    // Event listener for form submission
    $('#treatmentForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const id = parseInt($('#id').val());
        const name = $('#name').val();
        const animalTag = $('#animal_tag').val();
        const medId = parseInt($('#med_id').val());
        const usedMedQuantity = parseInt($('#used_med_quantity').val());
        const date = $('#date').val();

        const formData = {
            id, name, animal_tag: animalTag, med_id: medId,
            used_med_quantity: usedMedQuantity, date
        };

        // Send AJAX POST request to add data to Treatment table
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5300/treatment',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                alert('Data added to Treatment table successfully');
                // Clear form fields after successful submission
                $('#treatmentForm')[0].reset();
            },
            error: function(xhr, status, error) {
                console.error('Error adding data to Treatment table:', error);
                alert('Error adding data to Treatment table. Please try again.');
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
     url: `http://localhost:5300/treatment/${id}`,
     success: function(response) {
         console.log(response); // Log the entire response to inspect the format

         // Handle null or undefined values and format dates correctly
         $('#name').val(response.name || '');
         $('#animal_tag').val(response.animal_tag || '');
         $('#med_id').val(response.med_id || '');
         $('#used_med_quantity').val(response.used_med_quantity || '');
         $('#date').val(response.date ? new Date(response.date).toISOString().split('T')[0] : '');
     },
     error: function(xhr, status, error) {
         console.error('Error fetching treatment data:', error);
         alert('Error fetching treatment data. Please try again.');
     }
 });
});

// Event listener for Update button
$('#upBtn').click(function(event) {
 // Get form data
 const id = parseInt($('#id').val());
 const name = $('#name').val();
 const animal_tag = $('#animal_tag').val();
 const med_id = $('#med_id').val();
 const used_med_quantity = $('#used_med_quantity').val();
 const date = $('#date').val();

 if (isNaN(id) || !name || !animal_tag || !med_id || !used_med_quantity || !date) {
     alert('Please fill out all fields correctly');
     return;
 }

 // Create an object with the form data
 const formData = { id, name, animal_tag, med_id, used_med_quantity, date };

 // Send AJAX PUT request to update data in the Forage table
 $.ajax({
     type: 'PUT',
     url: `http://localhost:5300/treatment/${id}`,
     data: JSON.stringify(formData),
     contentType: 'application/json',
     success: function(response) {
         alert('Treatment data updated successfully');
     },
     error: function(xhr, status, error) {
         console.error('Error updating treatment data:', error);
         alert('Error updating treatment data. Please try again.');
     }
 });
});
