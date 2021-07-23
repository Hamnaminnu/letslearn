import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileserviceService : ProfileserviceService) { }

  student:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
     
      var id = params.get("_id");
     //   alert(this.id);
      console.log(id);
       this.ProfileserviceService.getstudentprofile(id)
       .subscribe(data => {
       this.student = data;
       
     });
        
    });
  }

}
