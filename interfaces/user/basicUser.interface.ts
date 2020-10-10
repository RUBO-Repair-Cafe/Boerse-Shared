import { IBasicListing } from "../listing/basicListing.interface";

export interface IBasicUser {
  userId: string;
  firstName: string;
  listings?: IBasicListing[]
}