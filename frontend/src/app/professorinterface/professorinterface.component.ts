import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-professorinterface',
  templateUrl: './professorinterface.component.html',
  styleUrls: ['./professorinterface.component.css']
})
export class ProfessorinterfaceComponent implements OnInit {

  professor={
    name:'',
    email:'',
    gender:'',
    number:'',
    cn:'0',
    address:'',
    qualification:'',
    coursename:'',
    duration:'',
    description:'',
    url:''
  }
  constructor(private ProfileserviceService : ProfileserviceService,private router : Router) { }
  url=""
  ngOnInit(): void {
    
  }
  Adddata()
  {    
    this.ProfileserviceService.newProfessordata(this.professor).subscribe(
      res => {
        if(res.message == "Success"){
          alert("Sigup successful. Please login.")
          this.router.navigate(['loginprofessor']);
        }
        if(res.message == "Failed")
        {
          alert("User already exists. Please trying logging into your account")
          this.router.navigate(['professorinterface'])
        }
      }
    )
    console.log("Called");    
  }
  selectfile(event:any){
    // image file convert to url 
  if (event.target.files.length > 0){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
    this.url=event.target.result
    this.professor.url=this.url;
    console.log("here");
    }
  }
}

}
