import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
