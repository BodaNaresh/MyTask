import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoModel } from 'src/Models/TodoModel';
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpclient:HttpClient) { }
  
  private url="http://localhost:25193/api/Todos/";

  name:String="";
  result:String="";
  value:string="";
  status:string="";
  modified:string="";
  act:string="";

  //get method
  Gettodo(){
    return this.httpclient.get<ToDoModel[]>(this.url)
      .pipe(map((res:any)=>{
        return res;
        
      }))
  }

  //post method
 async createtodo(name:string){
    return await this.httpclient.post<any>(this.url,{
      name: name
    }).toPromise().then((data:any)=>{
      this.result= data;
      this.name='';
    });
  }

  //put method
  async putstatval(id:number,newstatus:string){
    return await this.httpclient.put<any>(this.url+id,{
     act : id,
     status: newstatus
    }).toPromise().then((res:any)=>{
      this.modified=res;
    })
  }

  //delete todo
  deletetodo(id:number){
    var url1=this.url+id;
    return this.httpclient.delete<ToDoModel>(url1);
  }
}


