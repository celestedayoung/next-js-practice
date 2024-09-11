import Link from "next/link";
import { ReactNode } from "react";
import style from "./global-layout.module.css";

export default function GlabalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>📚 ONEBITE BOOKS</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>제작 @dayoung</footer>
    </div>
  );
}
