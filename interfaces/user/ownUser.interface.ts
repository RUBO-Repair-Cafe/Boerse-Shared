import { IConversationUser } from "./conversationUser.interface";
import { ILoggedInUser } from "./loggedInUser.interface";

export interface IOwnUser extends ILoggedInUser{
  email: string;
  lastOnline?: string;
}