import { Component, OnInit } from '@angular/core';
import { Status } from 'src/Models/todoenum';
import { ToDoModel } from 'src/Models/TodoModel';
import { TodoService } from '../TodoServices/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  
  name:string=" ";
  pending:any;
  Inprogress:any;
  Completed:any;
  select:string="";
  selected:string="";
  Searchterm!:string;

  Alltodo:ToDoModel[]=[];
  filterTodo:ToDoModel[]=[];
  Showtodo:ToDoModel[]=[];
 
  constructor(private api:TodoService) { }

  ngOnInit(): void {
    this.GettTodoAll();
    
  }

  //Getting Todos
  GettTodoAll(){
    this.api.Gettodo().subscribe((result)=>
    {this.Alltodo=result},()=>{} ,
    ()=>{this.Showtodo=this.Alltodo;} );
  }

  //Posting Todos
  PostTodo(){
    this.api.createtodo(this.name).then(()=>
    this.GettTodoAll());
  }

  //Updating todo
  UpdateTodo(id:number,newstatus:string){
      this.api.putstatval(id,newstatus).then(()=>
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

  pendingCount(){
    return this.Alltodo.reduce((p,c)=>{
      let count=0;
      if(c.Status==Status.Completed){
        count=1;
      }
      return p+count;
     },0)
  }
}
