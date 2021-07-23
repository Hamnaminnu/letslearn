import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-studentreq',
  templateUrl: './studentreq.component.html',
  styleUrls: ['./studentreq.component.css']
})
export class StudentreqComponent implements OnInit {
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileserviceService : ProfileserviceService) { }
  studentdata:any;
  professor:any
  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe(params => {
       var id = params["_id"];
       console.log(id);
       this.ProfileserviceService.getprofessorprofile(id)
      .subscribe(data => {
      this.professor = data;
      console.log(this.professor);
    });
       this.ProfileserviceService.getreqstudentdata(id)
       .subscribe(data => {
        this.studentdata=JSON.parse(JSON.stringify(data));
       console.log(data); 
     }); 
    });
  }
  reject(studentdata:any){
    this.activatedRoute.queryParams
     .subscribe(params => {
      var id = params["_id"];
      console.log(id);
     this.ProfileserviceService.reject(studentdata,id)     
     .subscribe(
       res => {
           alert("Rejected");
           location.reload();
       }
     )
   })}
   accept(studentdata:any){
    this.activatedRoute.queryParams
     .subscribe(params => {
      var id = params["_id"];
      console.log(id);
     this.ProfileserviceService.accept(studentdata,id)     
     .subscribe(
       res => {
           console.log(res);
           { if(res.message =="Success"){
            location.reload();
            alert("Accepted");
           }
            if(res.message =="Failed"){
              location.reload();
             alert('sorry count exceed, maximum student count is 40');
           }
       }}
     )
   })}
}
