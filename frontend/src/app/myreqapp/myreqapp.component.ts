import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-myreqapp',
  templateUrl: './myreqapp.component.html',
  styleUrls: ['./myreqapp.component.css']
})
export class MyreqappComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileserviceService : ProfileserviceService) { }
  coursedatas:any;

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe(params => {
     var id = params["_id"];
     console.log(id);
    this.ProfileserviceService .getreqcoursedata(id).subscribe((data)=>{
      this.coursedatas=JSON.parse(JSON.stringify(data));
    })
  });
  }
  witcourse(coursedata:any){
     this.activatedRoute.queryParams
      .subscribe(params => {
       var id = params["_id"];
       console.log(id);
      this.ProfileserviceService.coursewit(coursedata,id)     
      .subscribe(
        res => {
            alert("Succesfully withdrawn");
            location.reload();
        }
      )
    })}
}
