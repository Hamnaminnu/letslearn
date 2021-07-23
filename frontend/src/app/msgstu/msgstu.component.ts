import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-msgstu',
  templateUrl: './msgstu.component.html',
  styleUrls: ['./msgstu.component.css']
})
export class MsgstuComponent implements OnInit {
  msgs:any;
  titles:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileserviceService : ProfileserviceService) { }

  ngOnInit(): void {
     this.activatedRoute.paramMap.subscribe(params => { 
     var cid = params.get("_id");
     console.log(cid);
    this.ProfileserviceService .getmsgdata(cid).subscribe((data)=>{
      this.msgs=JSON.parse(JSON.stringify(data));
    })
    this.ProfileserviceService.gettitledata(cid).subscribe((data)=>{
      this.titles=JSON.parse(JSON.stringify(data));
      // console.log(this.titles)
    })
    })
  }
}
