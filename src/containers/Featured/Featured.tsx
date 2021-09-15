import { v4 as uuidv4 } from "uuid";
import FeaturedItemsCarousel from "../../components/FeaturedItemsCarousel";

import FeaturedItem from "../../models/FeaturedItem";

const Featured = () => {
  const data: FeaturedItem[] = [
    new FeaturedItem(
      uuidv4(),
      "https://images.wallpaperscraft.com/image/single/game_robot_bright_red_106_800x600.jpg",
      "Jogo da hora",
      "muito daora com os amigo",
      "/meujogo"
    ),
  ];

  return (
    <div>
      <FeaturedItemsCarousel data={data} />
    </div>
  );
};

export default Featured;
