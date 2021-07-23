import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-typemessage',
  templateUrl: './typemessage.component.html',
  styleUrls: ['./typemessage.component.css']
})
export class TypemessageComponent implements OnInit {
  messagetext={
    title:'',
    message:''
  }
  id:any
  constructor(private ProfileserviceService : ProfileserviceService,private activatedRoute:ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe(params => {
     this.id = params["_id"];
    });
  }
  Adddata()
  { this.activatedRoute.queryParams
    .subscribe(params => {
     var id = params["_id"];
     console.log(id);
    this.ProfileserviceService.newmsgdata(id,this.messagetext).subscribe(
      res => {
        if(res.message == "Success"){
          alert("Done");
          location.reload();
        }
      }
    )
    });
    console.log("Called");    
  }
}
