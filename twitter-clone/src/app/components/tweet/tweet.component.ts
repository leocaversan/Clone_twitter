import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { MessagesService } from '../../services/mesages.services';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnChanges, OnInit {

  @Input() TweetMessage: string = "";
  tweetsListMessages: string[] = [];
  
  constructor(public messagesService: MessagesService) { }
  ngOnInit(): void {
    this.tweetsListMessages = this.messagesService.getMessages()
  }
  ngOnChanges(): void {
    this.tweetsListMessages = this.messagesService.getMessages()
  }

  

}
