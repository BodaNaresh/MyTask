import { Component, OnInit } from '@angular/core';
import { IToDoModel } from 'src/Models/TodoModel';
import { TodoService } from '../TodoServices/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  name:string="";
  Searchterm:string="";
  Alltodo:IToDoModel[]=[];
  filterTodo:IToDoModel[]=[];
  Showtodo:IToDoModel[]=[];
 
  constructor(private api:TodoService) { }

  ngOnInit(): void {
    this.GettTodoAll();
  }

  //Getting Todos
  GettTodoAll(){
    this.api.Gettodo().subscribe((result)=>
    {this.Alltodo=result},()=>{},()=>{this.Showtodo=this.Alltodo});
  }

  //Posting Todos
  PostTodo(){
    this.api.createtodo(this.name).then(()=>
    this.GettTodoAll());
    this.name=" ";
  }

  //Updating todo
  UpdateTodo(id:number, newName:string, newstatus:string ){
      this.api.putstatusval(id, newName, newstatus).then(()=>
      this.GettTodoAll());
  }

 // Delete Todo
  Dlelete(id:number){
   if(confirm("Are you sure u want to delete")){
    this.api.deletetodo(id).subscribe(()=>{
       this.GettTodoAll();
     });
   }
  }
  
  //Searching todos
  Search(){
    this.filterTodo=this.Alltodo.filter((tag:any)=>{
      return tag.Name.toLowerCase().match(this.Searchterm.toLowerCase());
    })
    this.Showtodo=this.filterTodo;
  }

  //reduce todos
  TotalCount(){
    return this.Alltodo.reduce((p)=>{
      let count=1;
      return p+count;
     },0)
  }
  
  PendingCount(){
   return this.Alltodo.filter(res=>(res.Status.toString() === 'Pending')).length;
  }

  Inprogresscount(){
    return this.Alltodo.filter(output=>(output.Status.toString()==='Inprogress')).length;
  }

  Completedcount(){
    return this.Alltodo.filter(output=>(output.Status.toString()==='Completed')).length;
  }

  
}
