import { Component } from "@angular/core";

import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
   selector: 'app-message-input',
   templateUrl: './message-input.component.html',
   // providers: [MessageService]   HEIRARCHY : Creates its own instance
})

export class MessageInputComponent {

   constructor(private messageService: MessageService) {}
   onSave(value: string) {
      const message = new Message(value, 'Brent');
      this.messageService.addMessage(message);
   }
}
