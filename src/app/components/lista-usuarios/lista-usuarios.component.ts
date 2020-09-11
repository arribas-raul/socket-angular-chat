import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usersObs: Observable<any>;

  constructor( public chatService: ChatService) { }

  ngOnInit(): void {
    this.usersObs = this.chatService.getActiveUsers();

    //Emitir el obtener usuarios
    this.chatService.emitActiveUsers();
  }
}
