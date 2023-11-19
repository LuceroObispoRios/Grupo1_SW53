import { Component, Inject, ViewChild } from '@angular/core';
import { CargaSinEstresDataService } from 'src/app/services/carga-sin-estres-data.service';
import { Review } from 'src/app/models/review.model';
import { NgForm } from '@angular/forms';
import { HistoryCardsComponent } from '../history-cards/history-cards.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.scss']
})
export class ReviewDialogComponent {
  reviewForm: FormGroup;
  reviewData!: any;
  companyId!: any;
  rating: number = 0;

  userId: string = '';
  userType: string = '';
  nameCompany: any;
  logoCompany: any;
  company: any;

  constructor(private fb: FormBuilder, private companyDataService: CargaSinEstresDataService, private router: Router, private route: ActivatedRoute,@Inject(MAT_DIALOG_DATA) public data: any){
    this.reviewData = {} as any;

    this.reviewForm = this.fb.group({
      rating: [null, Validators.required],
      comment: ['', Validators.required],
    })
  }


  ngOnInit(): void {
    console.log('data is: ', this.data);
    this.companyId = this.data.company.company.id;
    
    this.userType = this.data.userType;
    this.userId = this.data.userId;
    console.log("USER companyId DE DIALOGO", this.companyId);

    this.getInitialValues();
  }

  getInitialValues(){
    this.companyDataService.getCompanyById(this.companyId).subscribe((response: any) => {
      console.log('Company RESPONSE: ', response);
      this.nameCompany = response.name;
      this.logoCompany = response.photo;
      this.company=response;
    });
  }

  //add
  sendReview() {
    const formData = this.reviewForm.value;
    const ratingValue = formData.rating === null ? 0 : formData.rating;
    const commentValue = formData.comment === null ? "..." : formData.comment;
  
    const reviewData = {
      rating: ratingValue,
      comment: commentValue,
    }
    console.log('reviewData a actualizar: ', reviewData);
  
    this.companyDataService.addReview(this.companyId, reviewData).subscribe((response: any) => {
      if (!Array.isArray(this.data.element)) {
        this.data.element = [];
      }
      this.data.element = this.data.element.map((o: any) => {
        if (o.id === response.id) {
          return response;
        }
        return o;
      });
    });
  
    this.reviewForm.reset();
  }

}
