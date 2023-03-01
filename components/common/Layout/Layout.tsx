import { PropsWithChildren } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import s from "./Layout.module.css";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className={s.root}>
            <Navbar />
            <main className="fit">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
