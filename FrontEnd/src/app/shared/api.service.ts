import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private_http:HttpClient) { 

}

//PUT GET POST DELETE METHOD

postLibrary(data:any){
  return this._http.post<any>("http://localhost:3000/posts",data).pipe(
    map(
      (res =>{
        return res;
      })))
 }
 getLibrary(data:any){
  return this._http.get<any>("http://localhost:3000/posts").pipe(
    map(
      (res =>{
        return res;
      })))
 }
 putLibrary(data:any,id:number){
  return this.http.put<any>("http://localhost:3000/posts/"+id,data).pipe(
    map(
      (res =>{
        return res;
      })))
 }
 deleteLibrary(id:number){
  return this.http.delete<any>("http://localhost:3000/posts/",+id).pipe(
    map(
      (res =>{
        return res;
      })))
 }

}
