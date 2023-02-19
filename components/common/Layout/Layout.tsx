import { PropsWithChildren } from "react";
import style from "./Layout.module.css";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={style.root}>
      <main className="fit">{children}</main>
    </div>
  );
};

export default Layout;
