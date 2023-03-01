import { PropsWithChildren } from "react";
import s from "./Layout.module.css";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className={s.root}>
            <main className="fit">{children}</main>
        </div>
    );
};

export default Layout;
