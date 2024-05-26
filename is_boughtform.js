
$(document).ready(function() {
    // Event listener for form submission
    $('#isBoughtForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const id = parseInt($('#id').val());
        const price = parseFloat($('#price').val());
        const buying_date = $('#buying_date').val();
        const currency = $('#currency').val();

        // Validate form data
        if (isNaN(id) || isNaN(price) || !buying_date || !currency) {
            alert('Please fill out all fields correctly');
            return;
        }

        const formData = { id, price, buying_date, currency };

        // Send AJAX POST request to add data to IsBought table
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5300/isbought',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                alert('Data added to IsBought table successfully');
                // Clear form fields after successful submission
                $('#isBoughtForm')[0].reset();
            },
            error: function(xhr, status, error) {
                console.error('Error adding data to IsBought table:', error);
                alert('Error adding data to IsBought table. Please try again.');
            }
        });
    });

    // Event listener for Get Data button
    $('#getBtn').click(function() {
        const id = parseInt($('#id').val());
        if (isNaN(id)) {
            alert('Please enter a valid ID');
            return;
        }

        // Send AJAX GET request to fetch data from the Forage table by ID
        $.ajax({
            type: 'GET',
            url: `http://localhost:5300/isbought/${id}`,
            success: function(response) {
                // Handle null or undefined values and format dates correctly
                $('#price').val(response.price || '');
                $('#currency').val(response.currency || '');
                $('#buying_date').val(response.buying_date ? new Date(response.buying_date).toISOString().split('T')[0] : '');
            },
            error: function(xhr, status, error) {
                console.error('Error fetching bought records:', error);
                alert('Error fetching bought records. Please try again.');
            }
        });
    });

    // Event listener for Update button
    $('#upBtn').click(function() {
        // Get form data
        const id = parseInt($('#id').val());
        const price = parseFloat($('#price').val());
        const currency = $('#currency').val();
        const buying_date = $('#buying_date').val();

        // Validate form data
        if (isNaN(id) || isNaN(price) || !buying_date || !currency) {
            alert('Please fill out all fields correctly');
            return;
        }

        // Create an object with the form data
        const formData = { id, price, currency, buying_date };

        // Send AJAX PUT request to update data in the Forage table
        $.ajax({
            type: 'PUT',
            url: `http://localhost:5300/isbought/${id}`,
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                alert('Bought record updated successfully');
            },
            error: function(xhr, status, error) {
                console.error('Error updating bought record:', error);
                alert('Error updating bought record. Please try again.');
            }
        });
    });
});
