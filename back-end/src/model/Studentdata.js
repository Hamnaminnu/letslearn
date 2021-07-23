const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://hamna:hamna@cluster0.loruh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/coursemanagement', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const Schema = mongoose.Schema;

var NewStudentSchema = new Schema({
    name:String,
    parentname:String,
    email:String,
    gender:String,
    number1:String,
    number2:String,
    address:String,
    qualification:String,
    collegename:String,
    city:String,
    id:String,
    url:String,
    mycourse: Array,
    mycoursereq: Array,
    mycoursereg:Array
});

var Studentdata = mongoose.model('Studentdata', NewStudentSchema);                  

module.exports = Studentdata;