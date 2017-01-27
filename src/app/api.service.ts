import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

const BASE_URL = '/api';
const user = 'rekrutacja';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(`${BASE_URL}/posts?author=${user}`);
  }

}
