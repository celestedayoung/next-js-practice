import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlabalLayout from "@/components/gloabl-layout";
import { ReactNode } from "react";
import { NextPage } from "next";

// getLayout type 지정해주기
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWithLayout;
}) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return <GlabalLayout>{getLayout(<Component {...pageProps} />)}</GlabalLayout>;
}
