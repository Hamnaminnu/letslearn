import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-msgpro',
  templateUrl: './msgpro.component.html',
  styleUrls: ['./msgpro.component.css']
})
export class MsgproComponent implements OnInit {

  msgs:any;
  titles:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileserviceService : ProfileserviceService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe(params => {
     var id = params["_id"];
    this.ProfileserviceService .getpromsgdata(id).subscribe((data)=>{
      this.msgs=JSON.parse(JSON.stringify(data));
    })
    this.ProfileserviceService.getprotitledata(id).subscribe((data)=>{
      this.titles=JSON.parse(JSON.stringify(data));
      // console.log(this.titles)
    })
    })
  }
}


