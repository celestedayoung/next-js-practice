import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Page() {
  const router = useRouter();
  // useRouter: router라는 객체를 컴포넌트 내부에서 사용할 수 있도록 반환해주는 훅
  console.log(router);
  // console이 2번 찍히는 이유: query string을 읽는 과정 중에 렌더링을 한 번 더 하기 때문

  const { q } = router.query;

  return <h1>Search {q}</h1>;
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
