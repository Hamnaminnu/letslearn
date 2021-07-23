import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-editstu',
  templateUrl: './editstu.component.html',
  styleUrls: ['./editstu.component.css']
})
export class EditstuComponent implements OnInit {
  student={
    name:'',
    parentname:'',
    email:'',
    gender:'',
    number1:'',
    number2:'',
    address:'',
    qualification:'',
    collegename:'',
    city:'',
    id:''
  }
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileserviceService : ProfileserviceService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe(params => {
     var id = params["_id"];
       this.ProfileserviceService.getupdatastu(id)
       .subscribe(data => {
       this.student = data;
       console.log(this.student);})
      
  })
}
  Adddata(){
    this.activatedRoute.queryParams
    .subscribe(params => {
     var id = params["_id"];
     const id2 = id.substring(1);
       this.ProfileserviceService.updatestu(id,this.student)
       .subscribe(
       )  
       alert("done");
       this.router.navigate(['studentdash/:'+id2]);
       console.log(this.student.address)
  })
  }
}
