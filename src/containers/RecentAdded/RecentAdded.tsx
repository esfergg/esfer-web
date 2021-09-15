import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import RecentAddedCard from "../../components/RecentAddedCard";

import { default as model } from "../../models/RecentAdded";

import styles from "./RecentAdded.module.css";

const RecentAdded = () => {
  const { t } = useTranslation();

  const cards: model[] = [
    new model(
      uuidv4(),
      [
        "https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png",
        "https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png",
      ],
      "End Game",
      "teste testete eetete"
    ),
    new model(
      uuidv4(),
      [
        "https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png",
        "https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png",
      ],
      "teste",
      "teste testete eetete"
    ),
    new model(
      uuidv4(),
      [
        "https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png",
        "https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png",
      ],
      "teste",
      "teste testete eetete"
    ),
    new model(
      uuidv4(),
      [
        "https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png",
        "https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png",
      ],
      "End Game",
      "teste testete eetete"
    ),
    new model(
      uuidv4(),
      [
        "https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png",
        "https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png",
      ],
      "teste",
      "teste testete eetete"
    ),
    new model(
      uuidv4(),
      [
        "https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png",
        "https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png",
      ],
      "teste",
      "teste testete eetete"
    ),
  ];

  return (
    <React.Fragment>
      <Container className="mt-4">
        <h1 className={styles.header}>{t("recent_added_games")}</h1>
        <div className={styles.container}>
          {cards.map(({ id, imgUrl, title, description }) => {
            return (
              <RecentAddedCard
                key={id}
                title={title}
                description={description}
                images={imgUrl}
              />
            );
          })}
        </div>
      </Container>
    </React.Fragment>
  );
};

export default RecentAdded;
