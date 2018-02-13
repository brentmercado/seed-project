export class Message {
   content: string;
   username: string;
   messageId?: string;      // to help with MongoDB Id's
   userId?: string;         // to help with MongoDB Id's

   constructor(content: string, username: string, messageId?: string, userId?: string) {
      this.content = content;
      this.username = username;
      this.messageId = messageId;
      this.userId = userId;
   }
}
