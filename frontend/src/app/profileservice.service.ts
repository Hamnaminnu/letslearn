import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {
  studentdata={
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
    id:'',
    url:''
  }
  professordata={
    name:'',
    email:'',
    gender:'',
    number:'',
    cn:'0',
    address:'',
    qualification:'',
    coursename:'',
    duration:'',
    description:'',
    url:''
  }
  ustudent={
    uname:' ',
    password:' '
  }
  uprofessor={
    uname:' ',
    password:' '
  }
  constructor(private http:HttpClient) { }
  newStudentdata(studentdata:any)
  {   
    return this.http.post<any>("http://localhost:3800/insert",{"Studentdata":studentdata});
  }
  newProfessordata(professordata:any)
  {   
    return this.http.post<any>("http://localhost:3800/insertprofessor",{"Professordata":professordata});
  }
  newustudentcheck(ustudent:any){
    return this.http.post<any>("http://localhost:3800/ustudentcheck",{"ustudentcheck":ustudent});  
  }
  newprofessorcheck(uprofessor:any){
    return this.http.post<any>("http://localhost:3800/uprofessorcheck",{"uprofessorcheck":uprofessor});
  }
  getstudentprofile(id:any){
    return this.http.get<any>("http://localhost:3800/studentprofile/"+id);
  }
  getprofessorprofile(id:any){
    return this.http.get<any>("http://localhost:3800/professorprofile/"+id);
  }
  getcoursedata(){
    return this.http.get<any>("http://localhost:3800/coursedata");
  }
  getstudentdata(){
    return this.http.get<any>("http://localhost:3800/studentdata");
  }
  getreqstudentdata(id:any){
    return this.http.get<any>("http://localhost:3800/reqstudentdata/"+id);
  }
  coursereq(course:any,id:any){
   return this.http.post<any>("http://localhost:3800/addreq/"+id, { "course": course});
  }
  getreqcoursedata(id:any){
    return this.http.get<any>("http://localhost:3800/reqdata/"+id);
  }
  coursewit(course:any,id:any){
    return this.http.post<any>("http://localhost:3800/witreq/"+id, {"course": course});
   }
   getappcoursedata(id:any){
    return this.http.get<any>("http://localhost:3800/appdata/"+id);
  }
  reject(student:any,id:any){
    return this.http.post<any>("http://localhost:3800/reject/"+id, { "student": student});
   }
  accept(student:any,id:any){
    return this.http.post<any>("http://localhost:3800/accept/"+id, { "student": student});
   }
   getmystudentdata(id:any){
    return this.http.get<any>("http://localhost:3800/mydata/"+id);
  }
  studentdeleteprofile(id:any){
    return this.http.get<any>("http://localhost:3800/delstu/"+id);
  }
  professordeleteprofile(id:any){
    return this.http.get<any>("http://localhost:3800/delpro/"+id);
  }
  getrejcoursedata(id:any){
    return this.http.get<any>("http://localhost:3800/rejcoursedata/"+id);
  }
  getupdatastu(id:any){
    return this.http.get<any>("http://localhost:3800/updatastu/"+id);
  }
  updatestu(id:any,student:any){
    return this.http.post<any>("http://localhost:3800/updatestu/"+id,{ "Studentdata":student});
  }
  getupdatapro(id:any){
    return this.http.get<any>("http://localhost:3800/updatapro/"+id);
  }
  updatepro(id:any,professor:any){
    return this.http.post<any>("http://localhost:3800/updatepro/"+id,{ "Professordata":professor});
  }
  newmsgdata(id:any,message:any)
  {   
    return this.http.post<any>("http://localhost:3800/typemsg/"+id,{"msgdata":message});
  }
  getmsgdata(id:any){
    return this.http.get<any>("http://localhost:3800/msg/"+id);
  }
  gettitledata(id:any){
    return this.http.get<any>("http://localhost:3800/title/"+id);
  }
  getpromsgdata(id:any){
    return this.http.get<any>("http://localhost:3800/promsg/"+id);
  }
  getprotitledata(id:any){
    return this.http.get<any>("http://localhost:3800/protitle/"+id);
  }
}
