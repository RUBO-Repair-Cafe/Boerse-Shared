import { IBasicImage } from "./image/basicImage.interface";

export interface IListingOverview {
  listingId: string;
  title: string;
  creationDate: Date;
  price: string;
  previewImage: IBasicImage
}