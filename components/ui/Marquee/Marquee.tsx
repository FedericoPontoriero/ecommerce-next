import { FC, ReactNode } from "react";
import s from "./Marquee.module.css";
import cn from "classnames";

interface Props {
    children: ReactNode[];
    variant?: "primary" | "secondary";
}

const Marquee: FC<Props> = ({ children, variant = "primary" }) => {
    const rootClassName = cn(s.root, {
        [s.secondary]: variant === "secondary",
    });
    return (
        <div className={rootClassName}>
            <div className={s.container}>{children}</div>
        </div>
    );
};

export default Marquee;
