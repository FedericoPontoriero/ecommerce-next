import { FC } from "react";
import Link from "next/link";

import s from "./Usernav.module.css";
import { Bag as Cart, Heart } from "@components/icons";

const Usernav: FC = (props) => {
    return (
        <nav>
            <ul className={s.list}>
                <li className={s.item}>
                    <Cart />
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
