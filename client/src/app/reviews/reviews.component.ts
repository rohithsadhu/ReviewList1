import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../review.service';
import {Review} from '../review';
import { HttpClientModule }    from '@angular/common/http';
import { subscribeOn } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers: [ReviewService]
})
export class ReviewsComponent implements OnInit {
  reviews:Review[] = [] ;

  review:Review;
  first_name:string;
  last_name:string;
  reviewdesc:string;

  constructor(private reviewService: ReviewService) { }

    addReview(){
      const newReview={
        first_name: this.first_name,
        last_name: this.last_name,
        reviewdesc: this.reviewdesc
      }
      this.reviewService.addReview(newReview).subscribe(review =>{
        this.reviews.push(this.review);
       return this.reviewService.getReviews()
    .subscribe(reviews=>reviews = reviews);
      });

    }

    deleteReview(id:any){
      var reviews=this.reviews;
      this.reviewService.deleteReview(id);
      // data.then( v => { } )
      // this.reviewService.deleteReview(id).subscribe(data=>{data.then(n=>{for(var i=0;i<reviews.length;i++){if(reviews[i]._id==id){reviews.splice(i,1);}}});
      }
      // var reviews=this.reviews;
      // this.reviewService.deleteReview(id)
      // .subscribe(data=>{
      //   if(data.then (n =>{
      //     for(var i=0;i<reviews.length;i++){
      //       if(reviews[i]._id == id){
      //         reviews.splice(i,1);
      //       }
      //     }
      //   })
      //   );
      // }
    
  ngOnInit() {
    this.reviewService.getReviews()
    .subscribe(reviews => reviews = reviews);
  }

}
