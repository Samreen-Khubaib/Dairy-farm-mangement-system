
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the view button
    document.getElementById("adbutton").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default behavior of the anchor tag
      $("#adModal").modal("show");
     
      // Make AJAX call
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:5300/animaldetailsview", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // On success, parse the response and display in the modal
            var response = JSON.parse(xhr.responseText);
            var modalTableBody = document.getElementById("adBody");
            modalTableBody.innerHTML = ""; // Clear previous data
            response.forEach(function(item) {
              var row = document.createElement("tr");
              row.innerHTML = `
                <td>${item.tag}</td>
                <td>${item.sex}</td>
                <td>${item.color}</td>
                <td>${item.kind}</td>
                <td>${item.specie}</td>
                <td>${new Date(item.born_date).toLocaleDateString()}</td>
                <td>${new Date(item.dying_date).toLocaleDateString()}</td>
                <td>${new Date(item.calfing_date).toLocaleDateString()}</td>
                <td>${item.num_of_treatments}</td>
                <td>${item.parent_tag}</td>
                <td>${item.buying_price}</td>
                <td>${new Date(item.buying_date).toLocaleDateString()}</td>
                <td>${item.currency}</td>
                <td>${item.food_group}</td>
              `;
              modalTableBody.appendChild(row);
            });
          } else {
            // On error, log the error message
            console.error("Error fetching data:", xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  });



  document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the view button
    document.getElementById("atsbutton").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default behavior of the anchor tag
      $("#atsModal").modal("show");
     
      // Make AJAX call
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:5300/animaltreatmentsummaryview", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // On success, parse the response and display in the modal
            var response = JSON.parse(xhr.responseText);
            var modalTableBody = document.getElementById("atsBody");
            modalTableBody.innerHTML = ""; // Clear previous data
            response.forEach(function(item) {
              var row = document.createElement("tr");
              row.innerHTML = `
                <td>${item.animal_tag}</td>
                <td>${item.specie}</td>
                <td>${item.color}</td>
                <td>${item.num_treatments}</td>
                <td>${item.total_med_quantity}</td>
              `;
              modalTableBody.appendChild(row);
            });
          } else {
            // On error, log the error message
            console.error("Error fetching data:", xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the view button
    document.getElementById("apbutton").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default behavior of the anchor tag
      $("#apModal").modal("show");
     
      // Make AJAX call
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:5300/animalproductionsummaryview", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // On success, parse the response and display in the modal
            var response = JSON.parse(xhr.responseText);
            var modalTableBody = document.getElementById("apBody");
            modalTableBody.innerHTML = ""; // Clear previous data
            response.forEach(function(item) {
              var row = document.createElement("tr");
              row.innerHTML = `
                <td>${item.animal_tag}</td>
                <td>${item.specie}</td>
                <td>${item.kind}</td>
                <td>${item.total_milk_production}</td>
                <td>${item.total_meat_production}</td>
              `;
              modalTableBody.appendChild(row);
            });
          } else {
            // On error, log the error message
            console.error("Error fetching data:", xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the view button
    document.getElementById("eabutton").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default behavior of the anchor tag
      $("#eaModal").modal("show");
     
      // Make AJAX call
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:5300/expenseanalysisview", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // On success, parse the response and display in the modal
            var response = JSON.parse(xhr.responseText);
            var modalTableBody = document.getElementById("eaBody");
            modalTableBody.innerHTML = ""; // Clear previous data
            response.forEach(function(item) {
              var row = document.createElement("tr");
              row.innerHTML = `
                <td>${item.expense_type}</td>
                <td>${item.quantity}</td>
                <td>${new Date(item.date).toLocaleDateString()}</td>
                <td>${item.miscellanous_costs}</td>
                <td>${item.remarks}</td>
                <td>${item.item_name}</td>
              `;
              modalTableBody.appendChild(row);
            });
          } else {
            // On error, log the error message
            console.error("Error fetching data:", xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the view button
    document.getElementById("sabutton").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default behavior of the anchor tag
      $("#saModal").modal("show");
     
      // Make AJAX call
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:5300/salesanalysisview", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // On success, parse the response and display in the modal
            var response = JSON.parse(xhr.responseText);
            var modalTableBody = document.getElementById("saBody");
            modalTableBody.innerHTML = ""; // Clear previous data
            response.forEach(function(item) {
              var row = document.createElement("tr");
              row.innerHTML = `
                <td>${item.production_id}</td>
                <td>${item.production_type}</td>
                <td>${item.quantity}</td>
                <td>${new Date(item.sales_date).toLocaleDateString()}</td>
              `;
              modalTableBody.appendChild(row);
            });
          } else {
            // On error, log the error message
            console.error("Error fetching data:", xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the view button
    document.getElementById("fcbutton").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default behavior of the anchor tag
      $("#fcModal").modal("show");
     
      // Make AJAX call
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:5300/foragecostperkgview", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // On success, parse the response and display in the modal
            var response = JSON.parse(xhr.responseText);
            var modalTableBody = document.getElementById("fcBody");
            modalTableBody.innerHTML = ""; // Clear previous data
            response.forEach(function(item) {
              var row = document.createElement("tr");
              row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td>${item.unit}</td>
                <td>${item.cost_per_kg}</td>
              `;
              modalTableBody.appendChild(row);
            });
          } else {
            // On error, log the error message
            console.error("Error fetching data:", xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the view button
    document.getElementById("fibutton").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default behavior of the anchor tag
      $("#fiModal").modal("show");
     
      // Make AJAX call
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:5300/animalproductionsummaryview", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // On success, parse the response and display in the modal
            var response = JSON.parse(xhr.responseText);
            var modalTableBody = document.getElementById("fiBody");
            modalTableBody.innerHTML = ""; // Clear previous data
            response.forEach(function(item) {
              var row = document.createElement("tr");
              row.innerHTML = `
                <td>${item.animal_tag}</td>
                <td>${item.specie}</td>
                <td>${item.kind}</td>
                <td>${item.total_milk_production}</td>
                <td>${item.total_meat_production}</td>
              `;
              modalTableBody.appendChild(row);
            });
          } else {
            // On error, log the error message
            console.error("Error fetching data:", xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the view button
    document.getElementById("fgbutton").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default behavior of the anchor tag
      $("#fgModal").modal("show");
     
      // Make AJAX call
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:5300/foodgroupanalysisview", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // On success, parse the response and display in the modal
            var response = JSON.parse(xhr.responseText);
            var modalTableBody = document.getElementById("fgBody");
            modalTableBody.innerHTML = ""; // Clear previous data
            response.forEach(function(item) {
              var row = document.createElement("tr");
              row.innerHTML = `
                <td>${item.group_name}</td>
                <td>${item.num_animals}</td>
              `;
              modalTableBody.appendChild(row);
            });
          } else {
            // On error, log the error message
            console.error("Error fetching data:", xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the view button
    document.getElementById("metbutton").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default behavior of the anchor tag
      $("#metModal").modal("show");
     
      // Make AJAX call
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:5300/monthlyexpensetrendview", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // On success, parse the response and display in the modal
            var response = JSON.parse(xhr.responseText);
            var modalTableBody = document.getElementById("metBody");
            modalTableBody.innerHTML = ""; // Clear previous data
            response.forEach(function(item) {
              var row = document.createElement("tr");
              row.innerHTML = `
                <td>${item.expense_month}</td>
                <td>${item.expense_year}</td>
                <td>${item.total_expense}</td>
              `;
              modalTableBody.appendChild(row);
            });
          } else {
            // On error, log the error message
            console.error("Error fetching data:", xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the view button
    document.getElementById("mButton").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default behavior of the anchor tag
      $("#stockModal").modal("show");
     
      // Make AJAX call
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:5300/medicinestockview", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // On success, parse the response and display in the modal
            var response = JSON.parse(xhr.responseText);
            var modalTableBody = document.getElementById("stockBody");
            modalTableBody.innerHTML = ""; // Clear previous data
            response.forEach(function(item) {
              var row = document.createElement("tr");
              row.innerHTML = `
                <td>${item.medicine_id}</td>
                <td>${item.medicine_name}</td>
                <td>${item.current_stock}</td>
                <td>${new Date(item.expiry_date).toLocaleDateString()}</td>
              `;
              modalTableBody.appendChild(row);
            });
          } else {
            // On error, log the error message
            console.error("Error fetching data:", xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  });

document.addEventListener("DOMContentLoaded", function() {
  // Add click event listener to the view button
  document.getElementById("viewButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of the anchor tag
    $("#supplimentModal").modal("show");
   
    // Make AJAX call
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:5300/supplimentstockview", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // On success, parse the response and display in the modal
          var response = JSON.parse(xhr.responseText);
          var modalTableBody = document.getElementById("supplimentBody");
          modalTableBody.innerHTML = ""; // Clear previous data
          response.forEach(function(item) {
            var row = document.createElement("tr");
            row.innerHTML = `
              <td>${item.suppliment_id}</td>
              <td>${item.suppliment_name}</td>
              <td>${item.current_stock}</td>
              <td>${new Date(item.purchase_date).toLocaleDateString()}</td>
              <td>${item.purchase_price}</td>
            `;
            modalTableBody.appendChild(row);
          });
        } else {
          // On error, log the error message
          console.error("Error fetching data:", xhr.statusText);
        }
      }
    };
    xhr.send();
  });
});
