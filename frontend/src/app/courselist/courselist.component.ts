import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileserviceService : ProfileserviceService) { }
  coursedatas:any;

  ngOnInit(): void {
    this.ProfileserviceService .getcoursedata().subscribe((data)=>{
      this.coursedatas=JSON.parse(JSON.stringify(data));
    })
  }
  reqcourse(coursedata:any){
     this.activatedRoute.queryParams
      .subscribe(params => {

       var id = params["_id"];
       console.log(id);
      this.ProfileserviceService.coursereq(coursedata,id)     
      .subscribe(
        res => {
           if(res.message =="Success"){
            location.reload();
            alert("Successfully Requested");
           }
            if(res.message =="Failed"){
              location.reload();
             alert('sorry, YOU were already requested / registered / rejected');
           }
        }
      )
    })}
  }

