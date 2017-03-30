import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';
import { API_URL } from './../app.constants';


@Injectable()
export class InstructorService {

  constructor(private http: Http, private authHttp: AuthHttp) { }

  public getInstructors(): Observable<Response> {

      return this.authHttp.get(`${API_URL}/instructors`);
    // make a GET request to the /instructors endpoint to get
    // a listing of instructors
  }

  public addInstructor(data) {

      return this.authHttp.post(`${API_URL}/instructors`, data);
      //: Observable<Response>
    // make a POST request to the /instructors endpoint to add
    // a new instructor
  }

}