import { IBasicConversation } from "../conversation/basicConversation.interface";
import { IConversationUser } from "../user/conversationUser.interface";

export interface IBasicMessage{
  messageId: string;
  text: string;
  creationDate: Date;
  reply: IBasicMessage;
  conversation: IBasicConversation;
  receiver: IConversationUser;
  sender: IConversationUser;
  read: boolean;
}