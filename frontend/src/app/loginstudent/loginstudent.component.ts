import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-loginstudent',
  templateUrl: './loginstudent.component.html',
  styleUrls: ['./loginstudent.component.css']
})
export class LoginstudentComponent implements OnInit {
  ustudent={
    uname:'',
    password:''
  }
  constructor(private ProfileserviceService : ProfileserviceService,private router : Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  check()
  {       
    this.ProfileserviceService.newustudentcheck(this.ustudent).subscribe(
     res =>  {
        console.log(res);
       if(res.message =="Success"){
        let id = res.id;
        this.router.navigate(['studentdash/:'+id]);
      }
       if(res.message =="Failed"){
        this.router.navigate(['loginstudent']);
        alert('invalid username or password');
      }
    
    })
   }    
}
