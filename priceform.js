
$(document).ready(function() {
    // Event listener for form submission
    $('#priceForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        
            const intid = $('#ID').val()
           const intItem_id = $('#item_id').val();
            const intPrice = $('#price').val();
           const date_of_price = $('#date_of_price').val()
           const unit = $('#unit').val()
            const id = parseInt(intid)
            const item_id=parseInt(intItem_id)
            const price=parseFloat(intPrice)

            const formData = {id,item_id,price,date_of_price,unit}

        // Send AJAX POST request to add a branch
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5300/price',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                alert('price added successfully');
                // Clear form fields after successful submission
                $('#priceForm')[0].reset();
            },
            error: function(xhr, status, error) {
                console.error('Error adding price:', error);
                alert('Error adding price. Please try again.');
            }
        });
    });
});

 
    $(document).ready(function() {
        // Event listener for Get Data button
        $('#getBtn').click(function(event) {
            const id = $('#ID').val();
            if (!id) {
                alert('Please enter an ID');
                return;
            }

            $.ajax({
                type: 'GET',
                url: `http://localhost:5300/price/${id}`,
                success: function(response) {
                    console.log(response); // Log the response to inspect its format
                    $('#item_id').val(response.item_id);
                    $('#price').val(response.price);
                    if (response.date_of_price) {
                        // Convert date to YYYY-MM-DD format if necessary
                        const date = new Date(response.date_of_price);
                        const formattedDate = date.toISOString().split('T')[0];
                        $('#date_of_price').val(formattedDate);
                    } else {
                        $('#date_of_price').val('');
                    }
                    $('#unit').val(response.unit);
                },
                error: function(xhr, status, error) {
                    console.error('Error fetching data:', error);
                    alert('Error fetching data. Please try again.');
                }
            });
        });

        // Event listener for Update button
        $('#upBtn').click(function(event) {
            const id = $('#ID').val();
            const item_id = $('#item_id').val();
            const price = parseFloat($('#price').val());
            const date_of_price = $('#date_of_price').val();
            const unit = $('#unit').val();

            if (!id || !item_id || isNaN(price) || !date_of_price || !unit) {
                alert('Please fill out all fields');
                return;
            }

            const formData = { item_id, price, date_of_price, unit };

            $.ajax({
                type: 'PUT',
                url: `http://localhost:5300/price/${id}`,
                data: JSON.stringify(formData),
                contentType: 'application/json',
                success: function(response) {
                    alert('Price data updated successfully');
                },
                error: function(xhr, status, error) {
                    console.error('Error updating data:', error);
                    alert('Error updating data. Please try again.');
                }
            });
        });
    });
