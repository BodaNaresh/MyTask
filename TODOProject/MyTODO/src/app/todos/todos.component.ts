import { Component, OnInit } from '@angular/core';
import { TodoService } from '../TodoServices/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  Alltodo:any;
  name:any;
  pending:any;
  Inprogress:any;
  Completed:any;
  select:any;
  selected:any;
  value:any;
  Getstatval:any;
  status1:any;
  ddlselect:any;
  
 
  constructor(private api:TodoService) { }

  ngOnInit(): void {
    this.GettTodoAll();
  }

  //Getting Todos
  GettTodoAll(){
    this.Alltodo=this.api.Gettodo();

  }

  //Posting Todos
  PostTodo(){
    this.api.createtodo(this.name);
  }

  //Updating todo
  UpdateTodo(id:number,status1:string){
      this.api.putstatval(id,status1);
      this.GettTodoAll();
  }

 

 // Delete Todo
  Dlelete(id:number){
   if(confirm("Are you sure u want to delete")){
    this.api.deletetodo(id).subscribe(()=>{
       this.GettTodoAll();
     });
   }
  }
}
