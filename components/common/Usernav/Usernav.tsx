import { FC } from "react";
import Link from "next/link";

import s from "./Usernav.module.css";
import { Bag as Cart, Heart } from "@components/icons";
import { useUI } from "@components/ui/Context";

const Usernav: FC = () => {
    const { openSidebar } = useUI();

    return (
        <nav>
            <ul className={s.list}>
                <li className={s.item}>
                    <Cart onClick={openSidebar} />
                </li>
                <li className={s.item}>
                    <Link href="/wishlist">
                        <Heart />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default Usernav;
