import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";

type LayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
      <Footer />
    </>
  );
}
