import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>Index</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}

// 특정 페이지에서만 적용되는 레이아웃을 감싸주는 함수
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
