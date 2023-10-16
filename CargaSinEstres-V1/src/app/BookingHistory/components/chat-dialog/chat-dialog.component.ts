import { Component, Inject, ViewChild } from '@angular/core';
import { CargaSinEstresDataService } from 'src/app/services/carga-sin-estres-data.service';
import { Chat } from 'src/app/models/chat.model';
import { NgForm } from '@angular/forms';
import { HistoryCardsComponent } from '../history-cards/history-cards.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss'],
})

export class ChatDialogComponent {

  chatData!: Chat;
  messages!: Chat[];
  historyDialog!: HistoryCardsComponent;
  elementData!: any[];
  history!: any[];

  @ViewChild('chatForm',{static: false}) chatForm!: NgForm;

  userId: string = '';
  userType: string = '';

  constructor(private companyDataService: CargaSinEstresDataService, private router: Router, private route: ActivatedRoute
              , @Inject(MAT_DIALOG_DATA) public data: any){
    this.chatData = {} as Chat;
    this.messages = [];
    this.elementData = [];
    this.history = [];

  }

  ngOnInit(): void {
    console.log('data is: ');
    console.log(this.data);
    this.messages = this.data.element.chat;
    this.userType = this.data.userType;
    this.userId = this.data.userId;
  }

  //add
  sendMessage(){
    this.chatData.user = this.userType;
    this.chatData.id;
    this.chatData.dateTime = new Date().toLocaleDateString();
    console.log('this chatData: ', this.chatData);
    this.messages.push(this.chatData);
    this.data.element.chat = this.messages;

    this.companyDataService.updateBookingHistoryMessage(this.data.element.id, this.data.element).subscribe((response: any) => {
      console.log('response: ', response);
      this.data.element.map((o: any) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      })
    });
    this.messages = this.data.element.chat;
    this.chatForm.reset();
  }

}
