import React from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import ScrollContainer from "react-indiana-drag-scroll";

import ComingSoonItem from "../../components/ComingSoonItem";
import ComingSoonItemModel from "../../models/ComingSoonItemModel";

import styles from "./ComingSoon.module.css";
import { Container } from "react-bootstrap";

interface IComingSoonProps {}

const ComingSoon: React.FC<IComingSoonProps> = () => {
  const { t } = useTranslation();

  const items: ComingSoonItemModel[] = [
    new ComingSoonItemModel(
      uuidv4(),
      ["https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png"],
      [""],
      "titulo",
      140.0,
      [""]
    ),
    new ComingSoonItemModel(
      uuidv4(),
      ["https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png"],
      [""],
      "titulo",
      140.0,
      [""]
    ),
    new ComingSoonItemModel(
      uuidv4(),
      ["https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png"],
      [""],
      "titulo",
      140.0,
      [""]
    ),
    new ComingSoonItemModel(
      uuidv4(),
      ["https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png"],
      [""],
      "titulo",
      140.0,
      [""]
    ),
    new ComingSoonItemModel(
      uuidv4(),
      ["https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png"],
      [""],
      "titulo",
      140.0,
      [""]
    ),
    new ComingSoonItemModel(
      uuidv4(),
      ["https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png"],
      [""],
      "titulo",
      140.0,
      [""]
    ),
    new ComingSoonItemModel(
      uuidv4(),
      ["https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png"],
      [""],
      "titulo",
      140.0,
      [""]
    ),
    new ComingSoonItemModel(
      uuidv4(),
      ["https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png"],
      [""],
      "titulo",
      140.0,
      [""]
    ),
    new ComingSoonItemModel(
      uuidv4(),
      ["https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png"],
      [""],
      "titulo",
      140.0,
      [""]
    ),
    new ComingSoonItemModel(
      uuidv4(),
      ["https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png"],
      [""],
      "titulo",
      140.0,
      [""]
    ),
    new ComingSoonItemModel(
      uuidv4(),
      ["https://img.itch.zone/aW1nLzY5NDEyNDkucG5n/300x240%23c/h1Xq9E.png"],
      [""],
      "titulo",
      140.0,
      [""]
    ),
  ];

  return (
    <div>
      <Container>
        <h1 className={styles.header}>{t("coming_soon")}</h1>
      </Container>
      <ScrollContainer className="scroll-container" vertical={false}>
        <div className={styles.main}>
          {items.map(({ id, imgUrl, tags, title, price, platforms }) => (
            <ComingSoonItem
              key={id}
              id={id}
              imgUrl={imgUrl}
              tags={tags}
              title={title}
              price={price}
              platforms={platforms}
            />
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
};

export default ComingSoon;
