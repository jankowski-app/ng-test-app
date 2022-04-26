import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../model/users";


@Injectable({
  providedIn: 'root'
})
export class ApiDbService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  findAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${(this.url)}/users`);
  }

  findUserById(id: number): Observable<Users> {
    return this.http.get<Users>(`${(this.url)}/users/${id}`);
  }

}
