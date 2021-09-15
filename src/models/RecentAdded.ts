import { uuid } from "uuid";

class RecentAdded {
  id: uuid;
  imgUrl: string[];
  title: string;
  description: string;

  constructor(id: uuid, imgUrl: string[], title: string, description: string) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.title = title;
    this.description = description;
  }
}

export default RecentAdded;
