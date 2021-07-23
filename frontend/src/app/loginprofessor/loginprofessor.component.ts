import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
import { FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-loginprofessor',
  templateUrl: './loginprofessor.component.html',
  styleUrls: ['./loginprofessor.component.css']
})
export class LoginprofessorComponent implements OnInit {
  uprofessor={
    uname:'',
    password:''
  }
  constructor(private ProfileserviceService : ProfileserviceService,private router : Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  check()
  {       
    this.ProfileserviceService.newprofessorcheck(this.uprofessor).subscribe(
     res =>  {
        console.log(res);
      { if(res.message =="Success"){
        let id = res.id;
        this.router.navigate(['professordash/:'+id]);
      }
       if(res.message =="Failed"){
        this.router.navigate(['loginprofessor']);
        alert('invalid username or password');
      }
    }
    })
   }  
}
