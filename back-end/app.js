const express = require('express');
var Studentdata = require('./src/model/Studentdata');
var Professordata = require('./src/model/Professordata');
const cors = require('cors');
var bodyParser= require('body-parser');
// const body-parser = require('body-parser');
var app = new express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));
// CANDIDATE 

app.post('/insert',function(req,res){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS');
    // console.log(req.body);
   
    var item = {       
    name : req.body.Studentdata.name,
    parentname: req.body.Studentdata.parentname,
    email: req.body.Studentdata.email,
    gender: req.body.Studentdata.gender,
    number1: req.body.Studentdata.number1,
    number2: req.body.Studentdata.number2,
    address: req.body.Studentdata.address,
    qualification: req.body.Studentdata.qualification,
    collegename: req.body.Studentdata.collegename,
    city: req.body.Studentdata.city,
    id: req.body.Studentdata.id,
    url: req.body.Studentdata.url
   }   
   Studentdata.findOne({email: item.email})
   .then(Student=>{
    //   console.log(Student)
       if(Student){
           let message = "Failed";
        //    console.log(message);
           res.status(200).send({message});
       }
       else{
            var Student = new Studentdata(item);
            Student.save();
            // console.log(Student);
           let message = "Success";
           res.status(200).send({message});            
       }
   })    
//    var Student = new Studentdata(Student);
//    Student.save();
});
app.post('/insertprofessor',function(req,res){
   
    // console.log(req.body);
   
    var item = {       
    name : req.body.Professordata.name,
    email: req.body.Professordata.email,
    gender: req.body.Professordata.gender,
    number: req.body.Professordata.number,
    cn: req.body.Professordata.cn,
    address: req.body.Professordata.address,
    qualification: req.body.Professordata.qualification,
    coursename: req.body.Professordata.coursename,
    duration: req.body.Professordata.duration,
    description: req.body.Professordata.description,
    url: req.body.Professordata.url
   }       
   Professordata.findOne({email: item.email})
   .then(professor=>{
       if(professor){
           let message = "Failed";
        //   console.log(message);
           res.status(200).send({message});
       }
       else{
             var Professor= new Professordata(item);
            Professor.save();
           let message = "Success";
           res.status(200).send({message});            
       }
   }) 
   
});
app.post('/ustudentcheck',function(req,res){
   
 //   console.log(req.body);
    const name = req.body.ustudentcheck.uname;
    const upsw = req.body.ustudentcheck.password;
    Studentdata.findOne({email:name,number1:upsw})
    .then(ustudentcheck=>{
        if(ustudentcheck){
            let id = ustudentcheck._id;
            let message = "Success";
            res.status(200).send({id, message});
        }
        else{
        //    console.log("Wrong credentials");
            let message = "Failed"
            res.status(200).send({message});
        }
    })
    
});
app.post('/uprofessorcheck',function(req,res){
  //  console.log(req.body);
    const name = req.body.uprofessorcheck.uname;
    const upsw = req.body.uprofessorcheck.password;
    Professordata.findOne({email:name,number:upsw})
    .then(uprofessorcheck=>{
        if(uprofessorcheck){
            let id = uprofessorcheck._id;
            let message = "Success";
            res.status(200).send({id, message});
        }
        else{
         //   console.log("Wrong credentials");
            let message = "Failed"
            res.status(200).send({message});
        }
    })
    //     , function(err, result) {
    //     if (result){
    //     let message="success" 
    //     res.status(200).send({message});
    //     }
    //     else {
    //         let message="fail" 
    //     res.status(200).send({message});
    //     }
    //   });
    
});
app.get("/studentprofile/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const id = req.params.id;

    const id2 = id.substring(1);
 //   console.log(id2);
    Studentdata.findOne({_id : id2})
    .then(function(student){

        res.send(student);
        
    });

});
app.get("/professorprofile/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const id = req.params.id;
 //   console.log(id);
    const id2 = id.substring(1);
    // console.log(id2);
    Professordata.findOne({_id : id2})
    .then(function(professor){
      //  console.log(professor);
        res.send(professor);
        
    });

});
app.get('/coursedata',function(req,res){
    Professordata.find()
                .then(function(Professordata){
                    res.send(Professordata);
                });
});
app.get('/studentdata',function(req,res){
     Studentdata.find()
                .then(function(Studentdata){
                    res.send(Studentdata);
                });
});
app.get("/reqstudentdata/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const id = req.params.id;
 //   console.log(id);
    const id2 = id.substring(1);
    // var student = req.body.student._id;
    // console.log(id2);
        // Studentdata.findOne({mycoursereq.id: id2})
        // .then(function(data){
        //     res.send(data);
        //     console.log(data);
        // });   
        Professordata.findOne({_id:id2})
        .then(user=>{
      //      console.log(user);
            const stid = user.mystudentreq;
       //     console.log(stid);
            Studentdata.find({_id:stid})
            .then(function(data){
                res.send(data);
         //       console.log(data);
            }); 
        });   
});
app.post("/addreq/:id",function(req,res){

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const id = req.params.id;
    const id2 = id.substring(1);

    var cid = req.body.course._id;
    console.log(id2);
    Studentdata.findOne({_id:id2,$or:[{mycoursereq:cid},{mycourse:cid},{mycoursereg:cid}]})
    .then(user=>{
        if(user){
            let message = "Failed"
            res.status(200).send({message});
            console.log("failed")
        }
        else{
            Studentdata.findByIdAndUpdate(id2, {$push: {mycoursereq:cid}})
            .then(user=>{
                let message = "Success"
                res.status(200).send({message});
            })
            Professordata.findByIdAndUpdate(cid, {$push: {mystudentreq: id2}})
            .then(user=>{
                console.log("done");
            })
        }
    })

})
app.post("/witreq/:id",function(req,res){

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
      const id = req.params.id;
      const id2 = id.substring(1);
      // console.log(id);
      var course = req.body.course._id;
  //    console.log(course);
      Studentdata.findByIdAndUpdate(id2, {$pull: {mycoursereq: course}})
      .then(user=>{
          let message = "Success"
          res.status(200).send({message});
      })
     
})
app.get("/reqdata/:id",function(req,res){

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
   
      const id = req.params.id;
      const id2 = id.substring(1);
      // console.log(id);
 
   //   console.log("course");
      Studentdata.findOne({_id:id2})
      .then(user=>{
          const courseid = user.mycoursereq;
      //    console.log(courseid);
          Professordata.find({_id:courseid})
          .then(function(Professordata){
              res.send(Professordata);
          });
      })
     
})
app.get("/appdata/:id",function(req,res){

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
   
      const id = req.params.id;
      const id2 = id.substring(1);
      // console.log(id);
 
  //    console.log("course");
      Studentdata.findOne({_id:id2})
      .then(user=>{
          const courseid = user.mycourse;
      //    console.log(courseid);
          Professordata.find({_id:courseid})
          .then(function(Professordata){
              res.send(Professordata);
          });
      })
     
})
app.post("/accept/:id",function(req,res){

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
      const id = req.params.id;
      const id2 = id.substring(1);
      // console.log(id);
      var student = req.body.student._id;
    //   Professordata.findByIdAndUpdate(id2, {$push: {mystudent: student},$pull: {mystudentreq: student}})
    //   .then(user=>{
    //       let message = "Success";
    //       let newcount = parseInt(user.cn) + 1;

    //       Professordata.findByIdAndUpdate(id2,{cn:newcount}).then(user=>{
    //         console.log("done");
    //        });

    //       res.status(200).send({message});
    //       Studentdata.findByIdAndUpdate(student,{$push: {mycourse:id2},$pull: {mycoursereq:id2}})
    //         .then(user=>{
    //            console.log("done");
    //       });
    //   })
      Professordata.findOne({_id:id2})
      .then(user=>{
          if(user.cn!=40){
            let message = "Success";
            let newcount = parseInt(user.cn) + 1;
            Professordata.findByIdAndUpdate(id2,{cn:newcount,$push:{mystudent:student},$pull:{mystudentreq:student}}).then(user=>{
            console.log("done");
           });
            res.status(200).send({message});
            Studentdata.findByIdAndUpdate(student,{$push: {mycourse:id2},$pull: {mycoursereq:id2}})
            .then(user=>{
              console.log("done");
          });
        }
          else{
            let message = "Failed"
            res.status(200).send({message});
          }
      })
})
app.post("/reject/:id",function(req,res){

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
      const id = req.params.id;
      const id2 = id.substring(1);
      // console.log(id);
      var student = req.body.student._id;

      Professordata.findByIdAndUpdate(id2, {$pull: {mystudentreq: student}})
      .then(user=>{
          let message = "Success"
          res.status(200).send({message});
      })
      Studentdata.findByIdAndUpdate(student,{$pull: {mycoursereq:id2},$push: {mycoursereg:id2}})
            .then(user=>{
                console.log("done");
          });
           
})
app.get("/mydata/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const id = req.params.id;
    const id2 = id.substring(1);   
        Professordata.findOne({_id:id2})
        .then(user=>{
      //      console.log(user);
            const stid = user.mystudent;
        //    console.log(stid);
            Studentdata.find({_id:stid})
            .then(function(data){
                res.send(data);
           //     console.log(data);
            }); 
        });   
});
app.get("/delstu/:id",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    const id = req.params.id;  
        Studentdata.deleteOne({_id:id})
        .then(user=>{
            let message = "Success"
            res.status(200).send({message});
        });   
});
app.get("/delpro/:id",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    const id = req.params.id;  
        Professordata.deleteOne({_id:id})
        .then(user=>{
            let message = "Success"
            res.status(200).send({message});
        });   
});
app.get("/rejcoursedata/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const id = req.params.id;
    const id2 = id.substring(1);   
            Studentdata.findOne({_id:id2})
            .then(function(data){
                const courseid = data.mycoursereg;
                Professordata.find({_id:courseid})
                .then(function(data){
                 res.send(data);
                 console.log("here")
                });
            });   
});
app.get("/updatastu/:id",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    const id = req.params.id;
    const id2 = id.substring(1);
    Studentdata.findOne({_id : id2})
    .then(function(data){
        res.send(data);
    });
});
app.post("/updatestu/:id",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    const id = req.params.id;
    const id2 = id.substring(1);
    var item = {       
        email: req.body.Studentdata.email,
        number1: req.body.Studentdata.number1,
        number2: req.body.Studentdata.number2,  
        qualification: req.body.Studentdata.qualification,
        collegename: req.body.Studentdata.collegename,
        city2: req.body.Studentdata.city2,
        address: req.body.Studentdata.address,
        id: req.body.Studentdata.id
       }   
       console.log(req.body.Studentdata.address)
       Studentdata.findByIdAndUpdate(id2,{email:item.email,number1:item.number1,number2:item.number2,qualification:item.qualification,collegename:item.collegename,city2:item.city2,id:item.id,address:item.address})
       .then(Student=>{
        console.log("done");
       })    

});
app.get("/updatapro/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const id = req.params.id;
    const id2 = id.substring(1);
    Professordata.findOne({_id : id2})
    .then(function(data){
        res.send(data);
    });

});
app.post("/updatepro/:id",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    const id = req.params.id;
    const id2 = id.substring(1);
    var item = {       
        email: req.body.Professordata.email,
        number: req.body.Professordata.number,
        qualification: req.body.Professordata.qualification,
        address: req.body.Professordata.address,
        duration: req.body.Professordata.duration,
        description: req.body.Professordata.description,

       }  
       Professordata.findByIdAndUpdate(id2,{email:item.email,number:item.number,qualification:item.qualification,duration:item.duration,address:item.address,description:item.description})
       .then(Professor=>{
        console.log("done");
       })    

});
app.post("/typemsg/:id",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
      const id = req.params.id;
      const id2 = id.substring(1);
      Professordata.findByIdAndUpdate(id2, {$push:{title:req.body.msgdata.title,message: req.body.msgdata.message}})
              .then(user=>{
                  let message = "Success"
                  res.status(200).send({message});
              })
})
app.get("/msg/:id",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
      const id = req.params.id;
      const id2 = id.substring(1);
          Professordata.findOne({_id:id2})
          .then(function(Professor){
              res.status(200).send(Professor.message);
              console.log("data");
          });
})
app.get("/title/:id",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
      const id = req.params.id;
      const id2 = id.substring(1);
          Professordata.findOne({_id:id2})
          .then(function(Professor){
              res.status(200).send(Professor.title);
              console.log("data");
          });
})
app.get("/promsg/:id",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
      const id = req.params.id;
      const id2 = id.substring(1);
          Professordata.findOne({_id:id2})
          .then(function(Professor){
              res.status(200).send(Professor.message);
              console.log("data");
          }); 
})
app.get("/protitle/:id",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
      const id = req.params.id;
      const id2 = id.substring(1);
          Professordata.findOne({_id:id2})
          .then(function(Professor){
              res.status(200).send(Professor.title);
              console.log("data");
          });

     
})
app.listen(3800, function(){
    console.log('listening to port 3800');
}); 

