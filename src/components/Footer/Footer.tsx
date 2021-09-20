import React from "react";
import { useTranslation } from "react-i18next";

import { Logo, FacebookIcon, TwitterIcon } from "../Icons";
import { Label } from "../Label";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <div className={styles.logos_vertical}>
        <Logo />
        <div className={styles.logos_horizontal}>
          <a href="/" target="_blank">
            <FacebookIcon />
          </a>
          <a href="/" target="_blank">
            <TwitterIcon />
          </a>
        </div>
      </div>
      <div className={styles.items}>
        <Label className="mr-5">{t("about_us")}</Label>
        <Label className="mr-5">{t("contact_us")}</Label>
        <Label className="mr-5">{t("terms")}</Label>
        <Label className="mr-5">{t("privacy")}</Label>
        <Label>{t("cookies")}</Label>
      </div>
    </div>
  );
};

export default Footer;
