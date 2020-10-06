import { ILoggedInUser } from "./loggedInUser.interface";

export interface IConversationUser extends ILoggedInUser {
  lastOnline: Date | null;
}