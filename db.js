// const mongoose = require('mongoose');

// // define the mondodb connection url
// const mongoURL = 'mongodb://localhost:27017/hotels'; // can replace 'mydatabase' with your database name

// // set up mongodb
// mongoose.connect(mongoURL,{
//     userNewUrlParser: true,
//     useUnifiedTopology: true
// })

// const db = mongoose.connection;

// db.on('connected',() =>{
//     console.log('connected to mongodb server');

// });

// db.on('error',(err) =>{
//     console.log(' mongodb connection error');

// });

// db.on('disconnected',() =>{
//     console.log('mongodb disconnected');

// });



// module.exports = db;


// 1. Import Mongoose
const mongoose = require('mongoose');
require('dotenv').config();

// 2. Define the MongoDB connection URL
//const mongoURL = process.env.MONGODB_URL_LOCAL; // Replace with your DB name
const mongoURL =  process.env.MONGODB_URL;
// 3. Set up connection options (optional but recommended)
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Other options like user/password if needed:
  // auth: { username: 'yourUsername', password: 'yourPassword' }
};

// 4. Connect to MongoDB
mongoose.connect(mongoURL, options)
  .then(() => {
    console.log('✅ MongoDB connected successfully!');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

// 5. Get the default connection
const db = mongoose.connection;

// 6. Handle connection events (optional but useful)
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected!');
});

db.on('reconnected', () => {
  console.log('MongoDB reconnected!');
});

// 7. Export the connection (optional, if needed elsewhere)
module.exports = db;
