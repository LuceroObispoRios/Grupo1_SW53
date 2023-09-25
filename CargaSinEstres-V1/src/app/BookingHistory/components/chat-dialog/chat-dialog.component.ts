import { Component, ViewChild } from '@angular/core';
import { HttpDataService } from '../../services/http-data.service';
import { Chat } from 'src/app/models/chat.model';
import { NgForm } from '@angular/forms';
import { HistoryCardsComponent } from '../history-cards/history-cards.component';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css'],
})
export class ChatDialogComponent {

  chatData!: Chat;
  historyDialog!: HistoryCardsComponent;

  @ViewChild('chatForm',{static: false}) chatForm!: NgForm;

  constructor(private httpDataService: HttpDataService){
    this.chatData = {} as Chat;
  }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(){
    this.httpDataService.getItems().subscribe((response: any) => {
      console.log(response);
    })
  }

  //add
  sendMessage(){
    this.chatData.id=0;
    this.chatData.dateTime = new Date().toLocaleDateString();
    console.log(this.chatData);
    this.httpDataService.createItem(this.chatData).subscribe((response: any) => {
      console.log(response);
    })
    this.chatForm.reset();
  }

}
