import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourselistComponent } from './courselist/courselist.component';
import { CourseregComponent } from './coursereg/coursereg.component';
import { EditproComponent } from './editpro/editpro.component';
import { EditstuComponent } from './editstu/editstu.component';
import { LoginprofessorComponent } from './loginprofessor/loginprofessor.component';
import { LoginstudentComponent } from './loginstudent/loginstudent.component';
import { MsgproComponent } from './msgpro/msgpro.component';
import { MsgstuComponent } from './msgstu/msgstu.component';
import { MyapplicationsComponent } from './myapplications/myapplications.component';
import { MyreqappComponent } from './myreqapp/myreqapp.component';
import { MystudentsComponent } from './mystudents/mystudents.component';
import { ProfessordashComponent } from './professordash/professordash.component';
import { ProfessorinterfaceComponent } from './professorinterface/professorinterface.component';
import { ProfessorprofileComponent } from './professorprofile/professorprofile.component';
import { StudentdashComponent } from './studentdash/studentdash.component';
import { StudentinterfaceComponent } from './studentinterface/studentinterface.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { StudentreqComponent } from './studentreq/studentreq.component';
import { TypemessageComponent } from './typemessage/typemessage.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [{path:'',component:WelcomeComponent},
{path:'studentinterface',component:StudentinterfaceComponent},
{path:'professorinterface',component:ProfessorinterfaceComponent},
{path:'loginstudent',component:LoginstudentComponent},
{path:'loginprofessor',component:LoginprofessorComponent},
{path:"professordash/:_id", component: ProfessordashComponent,
    children: [{path: "", component: ProfessorprofileComponent}, 
               {path: "studentreq", component: StudentreqComponent},
               {path: "mystudents", component: MystudentsComponent},
               {path: "editpro", component: EditproComponent},
               {path: "typemessage/msgview", component: MsgproComponent},
               {path: "typemessage", component: TypemessageComponent},
               {path: "studentlist", component: StudentlistComponent}]},
{path:"studentdash/:_id", component:StudentdashComponent,
children:[{path:"",component:StudentprofileComponent},
          {path:"courselist",component:CourselistComponent},
          {path: "myreqapp", component: MyreqappComponent},
          {path: "courserej", component: CourseregComponent},
          {path: "editstu", component: EditstuComponent},
          {path:"myapplication",component:MyapplicationsComponent,
          //  children:[{path:"viewmore",component:MsgstuComponent}]
          },{path:"myapplication/viewmore/:_id",component:MsgstuComponent},
          ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
