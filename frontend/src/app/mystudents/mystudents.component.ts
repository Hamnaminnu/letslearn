import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-mystudents',
  templateUrl: './mystudents.component.html',
  styleUrls: ['./mystudents.component.css']
})
export class MystudentsComponent implements OnInit {
  professor:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileserviceService : ProfileserviceService) { }
  studentdata:any;
  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe(params => {
       var id = params["_id"];
       this.ProfileserviceService.getprofessorprofile(id)
       .subscribe(data => {
       this.professor = data;
       console.log(this.professor);
     });
       this.ProfileserviceService.getmystudentdata(id)
       .subscribe(data => {
        this.studentdata=JSON.parse(JSON.stringify(data));
       console.log(data); 
     }); 
    });
  }

}
