import { FC, PropsWithChildren } from "react";
import styles from "./Grid.module.css";

const Grid: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Grid;
