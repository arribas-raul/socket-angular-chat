import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor( public wsService: WebsocketService ) {}

  sendMessage( msg: string ){

    const payload = {
      from: this.wsService.user.name,
      body: msg
    };

    this.wsService.emit('message', payload);
  }

  getMessages(){
    return this.wsService.listen('message-new');
  }

  getMessagesPrivate(){
    return this.wsService.listen('message-private');
  }

  getActiveUsers(){
    return this.wsService.listen('users-active');
  }

  emitActiveUsers(){
    return this.wsService.emit('users-active');
  }
}
