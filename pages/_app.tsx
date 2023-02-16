import { AppProps } from "next/app";
import { PropsWithChildren } from "react";

const Noop = ({ children }: PropsWithChildren) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: any } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
