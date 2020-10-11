
export interface IBasicMessage{
  messageId: string;
  text: string;
  creationDate: Date;
  replyMessageId: string;
  conversationId: string;
  receiverUserId: string;
  senderUserId: string;
  read: boolean;
  isAuthor: boolean;
}