import React from "react";
import { Card } from "react-bootstrap";

import { Label, GradientLabel } from "../Label";

import styles from "./RecentAddedCard.module.css";

interface IRecentAddedCardProps {
  title: string;
  description: string;
  images: string[];
}

const RecentAddedCard: React.FC<IRecentAddedCardProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <Card className={styles.card}>
      <Card.Img className={styles.image} variant="top" src={images[0]} />
      <Card.Body className={styles.body}>
        <Card.Title>
          <GradientLabel>{title}</GradientLabel>
        </Card.Title>
        <Card.Text className={styles.description}>
          <Label>{description}</Label>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RecentAddedCard;
