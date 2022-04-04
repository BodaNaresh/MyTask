import { Status } from "./todoenum";

export interface IToDoModel {
    ID:number;
    Name:string;
    Status:Status;
    CreationDate?:Date;
    LastUpdatedDate?:Date;
}