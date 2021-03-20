import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //declaração da variavel com array em typescript
  messages: string [] = [];


  //metodo com unico atributo tipo string que recebe a estrutura da variavel messages e retorna o valor de seu atributo unico (message)
  add(message: string){
    this.messages.push(message)
  }

  //metodo que adiciona null aos dados da variavel messages
  clear(){
    this.messages = [];
  }

  constructor() { }
}
