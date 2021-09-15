import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import FeaturedItem from "../../models/FeaturedItem";
import { GradientLabel, Label } from "../Label";

import style from "./FeaturedItemsCarousel.module.css";

interface ICarouselProps {
  data: FeaturedItem[];
}

const FeaturedItemsCarousel: React.FC<ICarouselProps> = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map(({ id, imgUrl, title, description }) => (
        <Carousel.Item key={id}>
          <div className={style.gradient}>
            <img
              className="d-block w-100"
              style={{ height: 700 }}
              src={imgUrl}
              alt={title}
            />
          </div>
          <Carousel.Caption>
            <h1>
              <GradientLabel size={64}>{title}</GradientLabel>
            </h1>
            <Label>{description}</Label>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default FeaturedItemsCarousel;
