import { AppProps } from "next/app";
import { PropsWithChildren } from "react";

import "@assets/main.css";
import UIProvider, { useUI } from "@components/ui/Context";

const Noop = ({ children }: PropsWithChildren) => <>{children}</>;

function MyApp({
    Component,
    pageProps,
}: AppProps & { Component: { Layout: any } }) {
    const Layout = Component.Layout ?? Noop;
    const ui = useUI();

    return (
        <UIProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </UIProvider>
    );
}

export default MyApp;
