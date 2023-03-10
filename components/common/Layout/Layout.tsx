import { CartSideBar } from "@components/cart";
import { Sidebar } from "@components/ui";
import { PropsWithChildren } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import s from "./Layout.module.css";
import { useUI } from "@components/ui/Context";

const Layout = ({ children }: PropsWithChildren) => {
    const { isSidebarOpen, closeSidebar } = useUI();

    return (
        <div className={s.root}>
            <Navbar />
            <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
                <CartSideBar />
            </Sidebar>
            <main className="fit">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
