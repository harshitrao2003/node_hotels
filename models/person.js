const mongoose = require('mongoose');

//define the person schema
const personSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
   },
   age:{
    type: Number
   },
   work:{
    type:String,
    enum: ['chef','waiter','manager'],
    required: true
   } ,
   mobile:{
    type:String,
    require:true
   },
   
   address:{
    type:String

   },
   salary:{
    type:Number,
    required:true
   }
});

//create person model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;