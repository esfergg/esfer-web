import { uuid } from "uuid";

class ComingSoonItemModel {
  id: uuid;
  imgUrl: string[];
  tags: string[];
  title: string;
  price: number;
  platforms: string[];

  constructor(
    id: uuid,
    imgUrl: string[],
    tags: string[],
    title: string,
    price: number,
    platforms: string[]
  ) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.tags = tags;
    this.title = title;
    this.price = price;
    this.platforms = platforms;
  }
}

export default ComingSoonItemModel;
