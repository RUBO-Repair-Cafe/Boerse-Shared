import { IBasicUser } from "../user/basicUser.interface";
import { IListingOverview } from "./listingOverview.interface";

export interface IBasicListing extends IListingOverview{
  listingId: string;
  text: string;
  title: string;
  price: string;
  pictureAmount: number;
  author?: IBasicUser;
}