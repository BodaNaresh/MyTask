import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Models } from 'src/Models/TodoModel';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpclient:HttpClient) { }
  
  private url="http://localhost:25193/api/Todos/";

  name:any;
  result:any;
  value:any;
  status:any
  modified:any;
  act:any;

  //get method
  Gettodo(){
    return this.httpclient.get<Models>(this.url);
  }

  //post method
  createtodo(name:string){
    return this.httpclient.post<any>(this.url,{
      name: name
    }).toPromise().then((data:any)=>{
      this.result=data;
      this.name='';
    });
  }

  //put method
  putstatval(id:number,status1:string){
    return this.httpclient.put<any>(this.url+id,{
     act : id,
     status: status1
     
    }).toPromise().then((res:any)=>{
      this.modified=res;
    })
    
  }

  //delete todo
  deletetodo(id:number){
    var url1=this.url+id;
    return this.httpclient.delete<Models>(url1);
  }
}


