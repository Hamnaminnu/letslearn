import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileserviceService : ProfileserviceService) { }
  studentdata:any;
  ngOnInit(): void {
    this.ProfileserviceService .getstudentdata().subscribe((data)=>{
      this.studentdata=JSON.parse(JSON.stringify(data));
     
    })
  }

}
