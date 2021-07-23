const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://hamna:hamna@cluster0.loruh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/coursemanagement', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const Schema = mongoose.Schema;

var NewProfessorSchema = new Schema({
    name:String,
    email:String,
    gender:String,
    number:String,
    address:String,
    qualification:String,
    coursename:String, 
    duration:String,
    description:String,
    cn:String,
    url:String,
    mystudent:Array,
    mystudentreq:Array,
    title:Array,
    message:Array
});

var Professordata= mongoose.model('Professordata', NewProfessorSchema);                  

module.exports = Professordata;