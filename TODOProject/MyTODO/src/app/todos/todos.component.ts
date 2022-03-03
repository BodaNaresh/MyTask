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
  status:any;
  pending:any;
  Inprogress:any;
  Completed:any;
  select:any;
  selected:any;
  Getstatval:any;
  
 
  constructor(private api:TodoService) { }

  ngOnInit(): void {
    // this.formvalue=this.formbuilder.group({
    //   ID:[],
    //   Name:[],
    //   Status:[],
    //   CreationDate:[],
    //   LastUpdatedDate:[]
    // })
    this.GettTodoAll();
  }

  //Getting Todos
  GettTodoAll(){
    this.Alltodo=this.api.Gettodo();

  }

  //Posting Todos
  PostTodo(){
    this.api.createtodo(this.name);
       this.GettTodoAll();
   
  }

  //Updating todo
  // UpdateTodo(){
  //     this.api.update(todo).subscribe(()=>{
        
  //     })
  // }

 

 // Delete Todo
  Dlelete(id:number){
   if(confirm("Are you sure u want to delete")){
    this.api.deletetodo(id).subscribe(()=>{
       this.GettTodoAll();
     });
   }
  }
}
