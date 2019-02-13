import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpClientModule} from '@angular/common/http';
import {Review} from './review';

import { map } from 'rxjs/operators';
import 'rxjs/Rx';


@Injectable()
export class ReviewService {

  constructor(private http: HttpClient) { }

  //retrieving reviews 
  getReviews(){
    return this.http.get('http://localhost:3000/api/reviews').map((res: Response) => res.json());

  }
  //add Reviews
  addReview(newReview){
    var options = new RequestInfo({
      headers: new Headers({
        'Accept': 'application/json'
      })
    });
   
    return this.http.get('http://localhost:3000/api/review',options).map(res => res.json());
  }

  //delete Review
  deleteReview(id){
    return this.http.delete('http://localhost:3000/api/review/'+id).map((res: Response) => res.json());
  }
}
