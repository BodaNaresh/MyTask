import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IToDoModel } from 'src/Models/TodoModel';
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpclient:HttpClient) { }
  
  private url="http://localhost:25193/api/Todos/";

  name:String="";
  result:String="";
  modified:string="";
  TodoId:number=0;

  //get method
  Gettodo(){
    return this.httpclient.get<IToDoModel[]>(this.url)
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  //post method
  async createtodo(name:string){
    return await this.httpclient.post<IToDoModel>(this.url,{
      name: name
    }).toPromise().then((data:any)=>{
      this.result= data;
    });
  }

  //put method
  async putstatusval(id:number, newName:string, newstatus:string){
    return await this.httpclient.put<IToDoModel>(this.url+id,{
     TodoId : id,
     Name: newName,
     status: newstatus
    }).toPromise().then((res:any)=>{
      this.modified=res;
    })
  }

  //delete todo
  deletetodo(id:number){
    var newUrl=this.url+id;
    return this.httpclient.delete<IToDoModel>(newUrl);
  }
}


