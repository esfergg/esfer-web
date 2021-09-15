import { uuid } from "uuid";

class FeaturedItem {
  id: uuid;
  imgUrl: string;
  title: string;
  description: string;
  redirectUrl: string;

  constructor(
    id: uuid,
    imgUrl: string,
    title: string,
    description: string,
    redirectUrl: string
  ) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.title = title;
    this.description = description;
    this.redirectUrl = redirectUrl;
  }
}

export default FeaturedItem;
