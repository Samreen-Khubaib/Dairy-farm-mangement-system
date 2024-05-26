
$(document).ready(function() {
    // Event listener for form submission
    $('#salesForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const id = parseInt($('#id').val());
        const production_id = parseInt($('#production_id').val());
        const quantity = parseFloat($('#quantity').val());
        const sales_date = $('#sales_date').val();
        

        const formData = { id, production_id, quantity, sales_date};

        // Send AJAX POST request to add data to Sales table
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5300/Sales',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                alert('Data added to Sales table successfully');
                // Clear form fields after successful submission
                $('#salesForm')[0].reset();
            },
            error: function(xhr, status, error) {
                console.error('Error adding data to Sales table:', error);
                alert('Error adding data to Sales table. Please try again.');
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

            // Send AJAX GET request to fetch data by ID
            $.ajax({
                type: 'GET',
                url: `http://localhost:5300/sales/${id}`,
                success: function(response) {
                    $('#production_id').val(response.production_id);
                    $('#quantity').val(response.quantity);
                    $('#sales_date').val(response.sales_date.substring(0, 10)); // Format the date properly
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
            const production_id = $('#production_id').val();
            const quantity = parseFloat($('#quantity').val());
            const sales_date = $('#sales_date').val();

            
            if (!id || !production_id || !quantity || !sales_date) {
                alert('Please fill out all fields');
                return;
            }

            const formData = { production_id, quantity, sales_date };

            $.ajax({
                type: 'PUT',
                url: `http://localhost:5300/sales/${id}`,
                data: JSON.stringify(formData),
                contentType: 'application/json',
                success: function(response) {
                    alert('Sales data updated successfully');
                },
                error: function(xhr, status, error) {
                    console.error('Error updating data:', error);
                    alert('Error updating data. Please try again.');
                }
            });
        });

