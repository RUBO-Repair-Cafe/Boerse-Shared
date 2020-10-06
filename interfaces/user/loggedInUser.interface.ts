import { IBasicUser } from "./basicUser.interface";

export interface ILoggedInUser extends IBasicUser{
  name: string;
  phoneNumber: string | null;
}