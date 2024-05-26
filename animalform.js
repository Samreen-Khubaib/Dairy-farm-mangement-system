
$(document).ready(function() {
    // Event listener for form submission
    $('#animalForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const tag = $('#tag').val();
        const sex = $('#sex').val();
        const color = $('#color').val();
        const kind = $('#kind').val();
        const specie = $('#specie').val();
        const born_date = $('#Born_Date').val();
        const dying_date = $('#Dying_Date').val() || null; // Set to null if empty
        const calfing_date = $('#Calfying_Date').val() || null;
        const numTreatments =$('#No_Of_Treatments').val();
        const num_of_treatments=parseInt(numTreatments)
        const parent_tag = $('#Parent_Tag').val()|| null;
        const isBought =$('#Is_Bought').val();
        const is_bought=parseInt(isBought)
        const food_group = $('#Food_group').val();

        const formData = {
            tag, sex, color, kind, specie, born_date,
             dying_date, calfing_date,  num_of_treatments,
            parent_tag,  is_bought, food_group
        };

        // Send AJAX POST request to add data to Animal table
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5300/animal',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                alert('Data added to Animal table successfully');
                // Clear form fields after successful submission
                $('#animalForm')[0].reset();
            },
            error: function(xhr, status, error) {
                console.error('Error adding data to Animal table:', error);
                alert('Error adding data to Animal table. Please try again.');
            }
        });
    });
});

 // Event listener for Get Data button
$('#getBtn').click(function(event) {
const tag = $('#tag').val();
if (!tag) {
    alert('Please enter a tag');
    return;
}

$.ajax({
    type: 'GET',
    url: `http://localhost:5300/animal/${tag}`,
    success: function(response) {
        console.log(response); // Log the entire response to inspect the format

        // Handle null or undefined values and format dates correctly
        $('#sex').val(response.sex || '');
        $('#color').val(response.color || '');
        $('#kind').val(response.kind || '');
        $('#specie').val(response.specie || '');
        $('#Born_Date').val(response.born_date ? new Date(response.born_date).toISOString().split('T')[0] : '');
        $('#Dying_Date').val(response.dying_date ? new Date(response.dying_date).toISOString().split('T')[0] : '');
        $('#Calfying_Date').val(response.calfing_date ? new Date(response.calfing_date).toISOString().split('T')[0] : '');
        $('#No_Of_Treatments').val(response.num_of_treatments || '');
        $('#Parent_Tag').val(response.parent_tag || '');
        $('#Is_Bought').val(response.is_bought || '');
        $('#Food_group').val(response.food_group || '');
    },
    error: function(xhr, status, error) {
        console.error('Error fetching data:', error);
        alert('Error fetching data. Please try again.');
    }
});
});

// Event listener for Update button
$('#upBtn').click(function(event) {
const tag = $('#tag').val();
const sex = $('#sex').val();
const color = $('#color').val();
const kind = $('#kind').val();
const specie = $('#specie').val();
const born_date = $('#Born_Date').val();
const dying_date = $('#Dying_Date').val();
const calfing_date = $('#Calfying_Date').val();
const num_of_treatments = parseInt($('#No_Of_Treatments').val());
const parent_tag = $('#Parent_Tag').val();
const is_bought = parseInt($('#Is_Bought').val());
const food_group = $('#Food_group').val();

if (!tag || !sex || !color || !kind || !specie || !born_date || isNaN(num_of_treatments) || isNaN(is_bought) || !food_group) {
    alert('Please fill out all fields');
    return;
}

const formData = {
    sex, color, kind, specie, born_date, dying_date, calfing_date, num_of_treatments, parent_tag, is_bought, food_group
};

$.ajax({
    type: 'PUT',
    url: `http://localhost:5300/animal/${tag}`,
    data: JSON.stringify(formData),
    contentType: 'application/json',
    success: function(response) {
        alert('Animal data updated successfully');
    },
    error: function(xhr, status, error) {
        console.error('Error updating data:', error);
        alert('Error updating data. Please try again.');
    }
});

});

// Event listener for Delete Data button
$('#delete').click(function(event) {
    const tag = $('#tag').val();
    if (!tag) {
        alert('Please enter a tag');
        return;
    }

    $.ajax({
        type: 'DELETE',
        url: `http://localhost:5300/animal/${tag}`,
        success: function(response) {
            alert('Animal data deleted successfully');
            // Clear form fields after successful deletion
            $('#animalForm')[0].reset();
        },
        error: function(xhr, status, error) {
            console.error('Error deleting data:', error);
            alert('Error deleting data. Please try again.');
        }
    });
});
