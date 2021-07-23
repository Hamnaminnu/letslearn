import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-editpro',
  templateUrl: './editpro.component.html',
  styleUrls: ['./editpro.component.css']
})
export class EditproComponent implements OnInit {
  professor={
    name:'',
    email:'',
    gender:'',
    number:'',
    address:'',
    qualification:'',
    coursename:'',
    duration:'',
    description:''
  }
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileserviceService : ProfileserviceService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe(params => {
     var id = params["_id"];
       this.ProfileserviceService.getupdatapro(id)
       .subscribe(data => {
       this.professor= data;
       console.log(this.professor);})
      
  })
}
  Adddata(){
    this.activatedRoute.queryParams
    .subscribe(params => {
     var id = params["_id"];
     const id2 = id.substring(1);
       this.ProfileserviceService.updatepro(id,this.professor)
       .subscribe(
       )  
       alert("done");
       this.router.navigate(['professordash/:'+id2]);
  })
  }
}
