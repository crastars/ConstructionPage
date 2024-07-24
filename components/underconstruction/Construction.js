import { OutlineButton } from "../buttons/OutlineButton";
import ChromeDino from "../ChromeDino";
import { MyLinks } from "../nav/components/MyLinks";
import { Heading } from "../nav/Heading";
import styles from "./construction.module.scss";
import React from 'react';

export const Construction = () => {
  return (
    <div className={styles.constructionWrapper}>
      {/* <Heading /> */}
      <h1 className={styles.constructionTitle}>
        Sorry<span>!</span>
      </h1>
      <h2 className={styles.constructionTitle2}>Page is currently under maintanence, we will be back shortly<span>.</span></h2>

      <MyLinks />
      {/* <div className={styles.resumeButton}>
        <OutlineButton onClick={() => window.open("/useResume.pdf")}>My Resume</OutlineButton>
      </div> */}
      <h4 className={styles.contactTitleSmall}>
        Contact me<span>:</span>
      </h4>
      <div className={styles.contactEmail}>
        <a href="mailto:carina.rastarhuyeva@gmail.com">carina.rastarhuyeva@gmail.com</a>
      </div>
      <ChromeDino />
    </div>
  );
};
