const {Client} = require('pg');

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"qwerty",
    database:"Mydairyfarm"
})

client.connect();

const express = require('express')
const server = express();
server.use(express.json());
const cors = require('cors');
server.use(cors());


const morgan = require('morgan')
server.use(morgan('tiny'));


server.get('/animaldetailsview' , (req,res) => {
    client.query('Select *from animaldetailsview', (err,result) => {
        if(!err){
            res.send(result.rows);
        } else{
            res.send(err.message);
        }
    })
})

server.get('/animaltreatmentsummaryview' , (req,res) => {
    client.query('Select *from AnimalTreatmentSummaryView', (err,result) => {
        if(!err){
            res.send(result.rows);
        } else{
            res.send(err.message);
        }
    })
})


server.get('/foragecostperkgview' , (req,res) => {
    client.query('Select *from Forage_Cost_Per_Kg_View', (err,result) => {
        if(!err){
            res.send(result.rows);
        } else{
            res.send(err.message);
        }
    })
})

server.get('/expenseanalysisview' , (req,res) => {
    client.query('Select *from expense_analysis', (err,result) => {
        if(!err){
            res.send(result.rows);
        } else{
            res.send(err.message);
        }
    })
})

server.get('/salesanalysisview' , (req,res) => {
    client.query('Select *from sales_analysis', (err,result) => {
        if(!err){
            res.send(result.rows);
        } else{
            res.send(err.message);
        }
    })
})

server.get('/forageinventoryview' , (req,res) => {
    client.query('Select *from forage_inventory', (err,result) => {
        if(!err){
            res.send(result.rows);
        } else{
            res.send(err.message);
        }
    })
})

server.get('/foodgroupanalysisview' , (req,res) => {
    client.query('Select *from food_group_analysis', (err,result) => {
        if(!err){
            res.send(result.rows);
        } else{
            res.send(err.message);
        }
    })
})

server.get('/animalproductionsummaryview' , (req,res) => {
    client.query('select *from AnimalProductionSummaryView', (err,result) => {
        if(!err){
            res.send(result.rows);
        } else{
            res.send(err.message);
        }
    })
})

server.get('/monthlyexpensetrendview' , (req,res) => {
    client.query('Select *from monthlyexpensetrendview', (err,result) => {
        if(!err){
            res.send(result.rows);
        } else{
            res.send(err.message);
        }
    })
})

server.get('/medicinestockview' , (req,res) => {
    client.query('Select *from medicine_stock_view', (err,result) => {
        if(!err){
            res.send(result.rows);
        } else{
            res.send(err.message);
        }
    })
})

server.get('/supplimentstockview' , (req,res) => {
    client.query('Select *from Suppliment_stock_view', (err,result) => {
        if(!err){
            res.json(result.rows);
        } else{
            res.json(err.message);
        }
    })
})

server.post('/price', (req, res)=> {
 
    const {id, item_id, price, date_of_price, unit} = req.body;
    let insertQuery = `insert into price(id, item_id, price, date_of_price, unit)
                       values(${id}, '${item_id}', '${price}', '${date_of_price}', '${unit}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
})



// POST method for inserting data into the ItemID table
server.post('/itemid', (req, res) => {
    const { id, name } = req.body;
    let insertQuery = `INSERT INTO ItemID(id, name) VALUES (${id}, '${name}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion into ItemID table was successful');
        } else {
            console.log(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
});




// POST method for inserting data into the FoodGroup table
/*server.post('/foodgroup', (req, res) => {
    const { id, group_name, ing_id } = req.body;
    let insertQuery = `INSERT INTO FoodGroup(id, group_name, ing_id) VALUES ('${id}', '${group_name}', '${ing_id}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion into FoodGroup table was successful');
        } else {
            console.log(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
});*/

// POST method for inserting data into the IsBought table
server.post('/isbought', (req, res) => {
    const { id, price, buying_date, currency } = req.body;
    let insertQuery = `INSERT INTO IsBought(id, price, buying_date, currency) VALUES (${id}, ${price}, '${buying_date}', '${currency}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion into IsBought table was successful');
        } else {
            console.log(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
});

// POST method for inserting data into the Animal table
server.post('/animal', (req, res) => {
    const { tag, sex, color, kind, specie, born_date, dying_date, calfing_date, num_of_treatments, parent_tag, is_bought, food_group } = req.body;
    let insertQuery = `INSERT INTO Animal(tag, sex, color, kind, specie, born_date, dying_date, calfing_date, num_of_treatments, parent_tag, is_bought, food_group) VALUES ('${tag}', '${sex}', '${color}', '${kind}', '${specie}', '${born_date}', '${dying_date}', '${calfing_date}', ${num_of_treatments}, '${parent_tag}', ${is_bought}, '${food_group}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion into Animal table was successful');
        } else {
            console.log(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
});

// POST method for inserting data into the Forage table
server.post('/forage', (req, res) => {
    const { id, name, item_id, quantity, unit, purchase_date } = req.body;
    let insertQuery = `INSERT INTO Forage(id, name, item_id, quantity, unit, purchase_date) VALUES (${id}, '${name}', ${item_id}, ${quantity}, '${unit}', '${purchase_date}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion into Forage table was successful');
        } else {
            console.log(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
});

// POST method for inserting data into the Suppliment table
server.post('/suppliment', (req, res) => {
    const { id, name, item_id, quantity, unit, purchase_date } = req.body;
    let insertQuery = `INSERT INTO Suppliment(id, name, item_id, quantity, unit, purchase_date) VALUES (${id}, '${name}', ${item_id}, ${quantity}, '${unit}', '${purchase_date}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion into Suppliment table was successful');
        } else {
            console.log(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
});

// POST method for inserting data into the Medicine table
server.post('/medicine', (req, res) => {
    const { id, name, item_id, quantity, unit, purchase_date } = req.body;
    let insertQuery = `INSERT INTO Medicine(id, name, item_id, quantity, unit, purchase_date) VALUES (${id}, '${name}', ${item_id}, ${quantity}, '${unit}', '${purchase_date}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion into Medicine table was successful');
        } else {
            console.log(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
});

// POST method for inserting data into the Treatment table
server.post('/treatment', (req, res) => {
    const { id, name, animal_tag, med_id, used_med_quantity, date } = req.body;
    let insertQuery = `INSERT INTO Treatment(id, name, animal_tag, med_id, used_med_quantity, date) VALUES (${id}, '${name}', '${animal_tag}', ${med_id}, ${used_med_quantity}, '${date}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion into Treatment table was successful');
        } else {
            console.log(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
});

// POST method for inserting data into the Expenses table
server.post('/expenses', (req, res) => {
    const { id, name, item_used_id, quantity, date, miscellanous_costs, remarks } = req.body;
    let insertQuery = `INSERT INTO Expenses(id, name, item_used_id, quantity, date, miscellanous_costs, remarks) VALUES (${id}, '${name}', ${item_used_id}, ${quantity}, '${date}', ${miscellanous_costs}, '${remarks}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion into Expenses table was successful');
        } else {
            console.log(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
});

// POST method for inserting data into the Production table
server.post('/production', (req, res) => {
    const { id, animal_tag, name, item_id, quantity, production_date } = req.body;
    let insertQuery = `INSERT INTO Production(id, animal_tag, name, item_id, quantity, production_date) VALUES (${id}, '${animal_tag}', '${name}', ${item_id}, ${quantity}, '${production_date}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion into Production table was successful');
        } else {
            console.log(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
});

// POST method for inserting data into the Sales table
server.post('/sales', (req, res) => {
    const { id, production_id, quantity, sales_date } = req.body;
    let insertQuery = `INSERT INTO Sales(id, production_id, quantity, sales_date) VALUES (${id}, ${production_id}, ${quantity}, '${sales_date}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion into Sales table was successful');
        } else {
            console.log(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
});


server.get('/price/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM price WHERE id = $1';
    
    client.query(query, [id], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.rows.length > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('Price data not found');
            }
        }
    });
});

server.put('/price/:id', (req, res) => {
    const { id } = req.params;
    const { item_id, price, date_of_price, unit } = req.body;
    const query = 'UPDATE Price SET item_id = $1, price = $2, date_of_price = $3, unit = $4 WHERE id = $5';
    const values = [item_id, price, date_of_price, unit, id];

    client.query(query, values, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Price data updated successfully');
        }
    });
});


server.get('/itemid/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM ItemID WHERE id = $1';
    
    client.query(query, [id], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.rows.length > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('ItemID data not found');
            }
        }
    });
});

server.put('/itemid/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const query = 'UPDATE ItemID SET name = $1 WHERE id = $2';
    const values = [name, id];

    client.query(query, values, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('ItemID data updated successfully');
        }
    });
});




server.get('/animal/:tag', (req, res) => {
    const { tag } = req.params;
    const query = 'SELECT * FROM Animal WHERE tag = $1';
    
    client.query(query, [tag], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.rows.length > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('Animal data not found');
            }
        }
    });
});

server.put('/animal/:tag', (req, res) => {
    const { tag } = req.params;
    const { sex, color, kind, specie, born_date, dying_date, calfing_date, num_of_treatments, parent_tag, is_bought, food_group } = req.body;
    const query = 'UPDATE Animal SET sex = $1, color = $2, kind = $3, specie = $4, born_date = $5, dying_date = $6, calfing_date = $7, num_of_treatments = $8, parent_tag = $9, is_bought = $10, food_group = $11 WHERE tag = $12';
    const values = [sex, color, kind, specie, born_date, dying_date, calfing_date, num_of_treatments, parent_tag, is_bought, food_group, tag];

    client.query(query, values, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Animal data updated successfully');
        }
    });
});

// DELETE method for deleting data from the Animal table by ID
server.delete('/animal/:tag',(req,res)=>{
    const { tag } = req.params;
    const query = 'DELETE FROM Animal WHERE tag = $1';

    client.query(query, [tag], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.rowCount > 0) {
                res.send('Animal data deleted successfully');
            } else {
                res.status(404).send('Animal data not found');
            }
        }
    });
});

server.get('/forage/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Forage WHERE id = $1';

    client.query(query, [id], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.rows.length > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('Forage data not found');
            }
        }
    });
});



// PUT method for updating data in the Forage table
server.put('/forage/:id', (req, res) => {
    const { id } = req.params;
    const { item_id, quantity, unit, purchase_date } = req.body;
    const updateQuery = 'UPDATE Forage SET item_id = $1, quantity = $2, unit = $3, purchase_date = $4 WHERE id = $5';

    client.query(updateQuery, [item_id, quantity, unit, purchase_date, id], (err, result) => {
        if (!err) {
            res.send('Forage data updated successfully');
        } else {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
});

server.get('/medicine/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Medicine WHERE id = $1';
    
    client.query(query, [id], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.rows.length > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('Medicine data not found');
            }
        }
    });
});

server.put('/medicine/:id', (req, res) => {
    const { id } = req.params;
    const { name, item_id, quantity, unit, purchase_date } = req.body;
    const query = 'UPDATE Medicine SET name = $1, item_id = $2, quantity = $3, unit = $4, purchase_date = $5 WHERE id = $6';
    const values = [name, item_id, quantity, unit, purchase_date, id];

    client.query(query, values, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Medicine data updated successfully');
        }
    });
});

server.get('/isbought/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Isbought WHERE id = $1';
    
    client.query(query, [id], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.rows.length > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('Bought record not found');
            }
        }
    });
});

server.put('/isbought/:id', (req, res) => {
    const { id } = req.params;
    const { price, buying_date, currency } = req.body;
    const query = 'UPDATE Isbought SET price = $1, buying_date = $2, currency = $3 WHERE id = $4';
    const values = [price, buying_date, currency, id];

    client.query(query, values, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Medicine data updated successfully');
        }
    });
});

server.get('/treatment/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Treatment WHERE id = $1';
    
    client.query(query, [id], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.rows.length > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('Treatment data not found');
            }
        }
    });
});

server.put('/treatment/:id', (req, res) => {
    const { id } = req.params;
    const { name, animal_tag, med_id, used_med_quantity, date } = req.body;
    const query = 'UPDATE Treatment SET name = $1, animal_tag = $2, med_id = $3, used_med_quantity = $4, date = $5 WHERE id = $6';
    const values = [name, animal_tag, med_id, used_med_quantity, date, id];

    client.query(query, values, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Treatment data updated successfully');
        }
    });
});


server.get('/sales/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Sales WHERE id = $1';
    
    client.query(query, [id], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.rows.length > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('Sales data not found');
            }
        }
    });
});

server.put('/sales/:id', (req, res) => {
    const { id } = req.params;
    const { production_id, quantity, sales_date } = req.body;
    const query = 'UPDATE Sales SET production_id = $1, quantity = $2, sales_date = $3 WHERE id = $4';
    const values = [production_id, quantity, sales_date, id];

    client.query(query, values, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Sales data updated successfully');
        }
    });
});



server.get('/production/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Production WHERE id = $1';

    client.query(query, [id], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.rows.length > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('Production data not found');
            }
        }
    });
});



// PUT method for updating data in the production table
server.put('/production/:id', (req, res) => {
    const { id } = req.params;
    const { animal_tag,name,item_id, quantity, production_date } = req.body;
    const updateQuery = 'UPDATE Production SET animal_tag = $1, name=$2, item_id = $3, quantity = $4, production_date = $5 WHERE id = $6';

    client.query(updateQuery, [animal_tag, name, item_id,quantity, production_date, id], (err, result) => {
        if (!err) {
            res.send('Production data updated successfully');
        } else {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
});

server.get('/suppliment/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Suppliment WHERE id = $1';

    client.query(query, [id], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.rows.length > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('Suppliment data not found');
            }
        }
    });
});



// PUT method for updating data in the Forage table
server.put('/suppliment/:id', (req, res) => {
    const { id } = req.params;
    const { item_id, quantity, unit, purchase_date } = req.body;
    const updateQuery = 'UPDATE Suppliment SET item_id = $1, quantity = $2, unit = $3, purchase_date = $4 WHERE id = $5';

    client.query(updateQuery, [item_id, quantity, unit, purchase_date, id], (err, result) => {
        if (!err) {
            res.send('Supplimente data updated successfully');
        } else {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
});


server.get('/expenses/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Expenses WHERE id = $1';

    client.query(query, [id], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.rows.length > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('Expenses data not found');
            }
        }
    });
});



// PUT method for updating data in the Expenses table
server.put('/expenses/:id', (req, res) => {
    const { id } = req.params;
    const { name,item_used_id, quantity, date, miscellanous_costs,remarks } = req.body;
    const updateQuery = 'UPDATE Expenses SET name = $1, item_used_id= $2, quantity = $3, date = $4 ,miscellanous_costs  = $5, remarks=$6 WHERE id = $7';

    client.query(updateQuery, [name,item_used_id, quantity, date, miscellanous_costs,remarks, id], (err, result) => {
        if (!err) {
            res.send('Expenses data updated successfully');
        } else {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
});

server.get('/foodgroup/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM FoodGroup WHERE id = $1';
    
    client.query(query, [id], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.rows.length > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('Food group data not found');
            }
        }
    });
});



server.listen(5300);