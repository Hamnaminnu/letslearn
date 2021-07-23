import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-studentdash',
  templateUrl: './studentdash.component.html',
  styleUrls: ['./studentdash.component.css']
})
export class StudentdashComponent implements OnInit {
  student:any;
  constructor(private router:Router,private activatedRoute: ActivatedRoute,private ProfileserviceService : ProfileserviceService ) { }
  userid = { id : '' }
  ngOnInit(): void { 
    this.userid.id = this.activatedRoute.snapshot.params['_id'];
    console.log('this.userid.id');
    this.ProfileserviceService.getstudentprofile(this.userid.id)
    .subscribe(data => {
    this.student = data;
    
  });
  }
  page(){
    const id2 = this.userid.id.substring(1);
    this.router.navigate(['studentdash/:'+id2]);
  }
  delete(){
  
    const id2 = this.userid.id.substring(1);
    this.ProfileserviceService.studentdeleteprofile(id2)
    .subscribe(res => {
      alert("Your account is deleted");
      this.router.navigate(['']);
  });
  }
}
