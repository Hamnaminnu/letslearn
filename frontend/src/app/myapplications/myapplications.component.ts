import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-myapplications',
  templateUrl: './myapplications.component.html',
  styleUrls: ['./myapplications.component.css']
})
export class MyapplicationsComponent implements OnInit {
  userid = { id : ''}
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileserviceService : ProfileserviceService) { }
  coursedatas:any;

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe(params => {
     var id = params["_id"];
     console.log(id);
     this.userid.id = id;
    this.ProfileserviceService .getappcoursedata(id).subscribe((data)=>{
      this.coursedatas=JSON.parse(JSON.stringify(data));
    })
  });
  }
}
