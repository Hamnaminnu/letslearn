import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-professordash',
  templateUrl: './professordash.component.html',
  styleUrls: ['./professordash.component.css']
})
export class ProfessordashComponent implements OnInit {
  professor:any
  constructor(private activatedRoute: ActivatedRoute,private router:Router ,private ProfileserviceService : ProfileserviceService) { }
  userid = { id : '' }
  ngOnInit(): void { 
    this.userid.id = this.activatedRoute.snapshot.params['_id'];
    this.ProfileserviceService.getprofessorprofile(this.userid.id)
      .subscribe(data => {
      this.professor = data;
    });
  }
  page(){
    const id2 = this.userid.id.substring(1);
    this.router.navigate(['professordash/:'+id2]);
  }
  delete(){
    const id2 = this.userid.id.substring(1);
    this.ProfileserviceService.professordeleteprofile(id2)
    .subscribe(res => {
      alert("Your account is deleted");
      this.router.navigate(['']);
  });
  }
}
