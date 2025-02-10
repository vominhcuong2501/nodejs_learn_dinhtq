
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');

// tro ve file muon hien thi
// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function (req, res) {
    res.render('pages/index');
});

// app.get('/*', (req, res) => {
//     res.send('404 not found')
// })


// connect store
app.use(express.json());
// mongodb+srv://minhcuongvo2501:123123123@cluster0.vc8zkff.mongodb.net/warehouse

mongoose.connect('mongodb+srv://minhcuongvo2501:123123123@test-dababase.4kteo.mongodb.net/test').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
}).finally(() => {
    console.log('Connection to MongoDB closed');
});

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
});

const Item = mongoose.model('Item', itemSchema);

// API route to create a new item
app.post('/api/items', async (req, res) => {
    const { name, quantity } = req.body;

    const newItem = new Item({ name, quantity });

    try {
        const savedItem = await newItem.save(); // Save the item to the database
        res.status(201).json(savedItem); // Return the saved item
    } catch (error) {
        res.status(500).json({ error: 'Failed to create item' });
    }
});


// get api text + json 
app.get('/api/login', (req, res) => {
    res.send('login')
})

app.get('/api/json', (req, res) => {
    res.json({
        message: 'Hello, world!',
        success: true,
        data: {
            name: 'cuong',
            id: '1',
            age: '27'
        }
    });
});

app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
    // mongodb+srv://admin:root@cluster0.vc8zkff.mongodb.net/warehouse
})

