import React from "react";
import { uuid } from "uuid";

import { GradientLabel, Label } from "../Label";

import styles from "./ComingSoonItem.module.css";

interface IComingSoonItemProps {
  id: uuid;
  imgUrl: string[];
  tags: string[];
  title: string;
  price: number;
  platforms: string[];
}

const ComingSoonItem: React.FC<IComingSoonItemProps> = ({
  id,
  imgUrl,
  tags,
  title,
  price,
  platforms,
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.gradient}>
        <img src={imgUrl[0]} alt={title} className={styles.image}></img>
      </div>
      <div className={styles.text}>
        <div className={styles.top_left}>
          <GradientLabel>{title}</GradientLabel>
        </div>
        <div className={styles.bottom_left}>
          <Label size={36}>{title}</Label>
          <GradientLabel size={24}>${price}</GradientLabel>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonItem;
