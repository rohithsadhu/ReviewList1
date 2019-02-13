import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpClientModule} from '@angular/common/http';
import {Review} from './review';
//import {RequestOptions} from '@angular/common/http'
import { map } from 'rxjs/operators';
import 'rxjs/Rx';


@Injectable()
export class ReviewService {

  constructor(private http: HttpClient) { }

  //retrieving reviews 
  getReviews(){
    return this.http.get('http://localhost:3000/api/reviews').map((res: Response) => res.json);

  }
  //add Reviews
  addReview(newReview){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
   
    return this.http.get('http://localhost:3000/api/reviews',options);
  }

  //delete Review
  deleteReview(id){
    return this.http.delete('http://localhost:3000/api/review/'+id).map((res: Response) => res.json);
  }
}
