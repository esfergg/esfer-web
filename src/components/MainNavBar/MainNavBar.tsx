import React from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Container, Nav } from "react-bootstrap";

import HorizontalLogo from "../Icons/HorizontalLogo";

import styles from "./MainNavBar.module.css";
import Button from "../Button";
import LanguageSelector from "../LanguageSelector";

const MainNavBar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Navbar className={styles.menu} expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <HorizontalLogo width={200} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.toggle_icon}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={styles.menu_item} href="/">
              {t("store")}
            </Nav.Link>
            <Nav.Link className={styles.menu_item} href="/browse">
              {t("browse")}
            </Nav.Link>
            <Nav.Link className={styles.menu_item} href="/support">
              {t("support")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text className="justify-content-end">
          <LanguageSelector />
          <Button>{t("login")}</Button>
          <Button>{t("register")}</Button>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default MainNavBar;
