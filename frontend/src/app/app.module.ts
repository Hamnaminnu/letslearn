import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentinterfaceComponent } from './studentinterface/studentinterface.component';
import { ProfessorinterfaceComponent } from './professorinterface/professorinterface.component';
import { LoginstudentComponent } from './loginstudent/loginstudent.component';
import { LoginprofessorComponent } from './loginprofessor/loginprofessor.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { ProfessorprofileComponent } from './professorprofile/professorprofile.component';
import { CourselistComponent } from './courselist/courselist.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { MystudentsComponent } from './mystudents/mystudents.component';
import { MyapplicationsComponent } from './myapplications/myapplications.component';
import { StudentreqComponent } from './studentreq/studentreq.component';
import { StudentdashComponent } from './studentdash/studentdash.component';
import { ProfessordashComponent } from './professordash/professordash.component';
import { MyreqappComponent } from './myreqapp/myreqapp.component';
import { CourseregComponent } from './coursereg/coursereg.component';
import { EditstuComponent } from './editstu/editstu.component';
import { EditproComponent } from './editpro/editpro.component';
import { TypemessageComponent } from './typemessage/typemessage.component';
import { MsgstuComponent } from './msgstu/msgstu.component';
import { MsgproComponent } from './msgpro/msgpro.component';
import { FooterComponent } from './footer/footer.component';

 
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StudentinterfaceComponent,
    ProfessorinterfaceComponent,
    LoginstudentComponent,
    LoginprofessorComponent,
    StudentprofileComponent,
    ProfessorprofileComponent,
    CourselistComponent,
    StudentlistComponent,
    MystudentsComponent,
    MyapplicationsComponent,
    StudentreqComponent,
    StudentdashComponent,
    ProfessordashComponent,
    MyreqappComponent,
    CourseregComponent,
    EditstuComponent,
    EditproComponent,
    TypemessageComponent,
    MsgstuComponent,
    MsgproComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
