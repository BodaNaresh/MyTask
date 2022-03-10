import { Status } from "./todoenum";

export interface ToDoModel {
    ID:number;
    Name:string;
    Status:Status;
    CreationDate?:Date;
    LastUpdatedDate?:Date;
}