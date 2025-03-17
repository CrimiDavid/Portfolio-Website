import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      {/* <div className={styles.headingButtons}> */}

      <OutlineButton onClick={() => window.open("/David_Crimi_Resume_2025-2026.pdf")}>
        My resume
      </OutlineButton>
      {/* </div> */}
    </header>
  );
};

{
}
