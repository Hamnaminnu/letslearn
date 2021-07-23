import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-coursereg',
  templateUrl: './coursereg.component.html',
  styleUrls: ['./coursereg.component.css']
})
export class CourseregComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileserviceService : ProfileserviceService) { }
  coursedatas:any;

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe(params => {
     var id = params["_id"];
     console.log(id);
    this.ProfileserviceService .getrejcoursedata(id).subscribe((data)=>{
      this.coursedatas=JSON.parse(JSON.stringify(data));
      console.log(this.coursedatas)
    })
  });
  }
}
