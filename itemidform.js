
$(document).ready(function() {
    // Event listener for form submission
    $('#itemIDForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const id = parseInt($('#id').val());
        const name = $('#name').val();

        const formData = { id, name };

        // Send AJAX POST request to add data to ItemID table
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5300/itemid',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                alert('Data added to ItemID table successfully');
                // Clear form fields after successful submission
                $('#itemIDForm')[0].reset();
            },
            error: function(xhr, status, error) {
                console.error('Error adding data to ItemID table:', error);
                alert('Error adding data to ItemID table. Please try again.');
            }
        });
    });
});





  // Event listener for Get Data button
  $('#getBtn').click(function(event) {
        const id = $('#id').val();
        if (!id) {
            alert('Please enter an ID');
            return;
        }

        $.ajax({
            type: 'GET',
            url: `http://localhost:5300/itemid/${id}`,
            success: function(response) {
                $('#name').val(response.name);
            },
            error: function(xhr, status, error) {
                console.error('Error fetching data:', error);
                alert('Error fetching data. Please try again.');
            }
        });
    });

    // Event listener for Update button
    $('#upBtn').click(function(event) {
        const id = $('#id').val();
        const name = $('#name').val();

        if (!id || !name) {
            alert('Please fill out all fields');
            return;
        }

        const formData = { name };

        $.ajax({
            type: 'PUT',
            url: `http://localhost:5300/itemid/${id}`,
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                alert('ItemID data updated successfully');
            },
            error: function(xhr, status, error) {
                console.error('Error updating data:', error);
                alert('Error updating data. Please try again.');
            }
        });
    });


