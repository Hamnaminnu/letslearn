import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-studentinterface',
  templateUrl: './studentinterface.component.html',
  styleUrls: ['./studentinterface.component.css']
})
export class StudentinterfaceComponent implements OnInit {

  student={
    name:'',
    parentname:'',
    email:'',
    gender:'',
    number1:'',
    number2:'',
    address:'',
    qualification:'',
    collegename:'',
    city:'',
    id:'',
    url:''
  }
  constructor(private ProfileserviceService : ProfileserviceService,private router : Router) { }
  url=""
  ngOnInit(): void {
    
  }
  Adddata()
  {    
    this.ProfileserviceService.newStudentdata(this.student)
    .subscribe(
      res => {
        console.log(res);
        if(res.message == "Success"){
          alert("Sigup successful. Please login.")
          this.router.navigate(['loginstudent']);
        }
        if(res.message == "Failed")
        {
          alert("User already exists. Please trying logging into your account")
          this.router.navigate(['studentinterface'])
        }
      }
    )
  }
  selectfile(event:any){
    // image file convert to url 
  if (event.target.files.length > 0){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
    this.url=event.target.result
    this.student.url=this.url;
    console.log("here");
    }
  }
}

}
