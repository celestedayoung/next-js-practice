import BookItem from "@/components/book-item";
import { BookData } from "@/types";

export default async function Page({
  // query string과 같이 동적인 값에 의존하므로 static page로 만들기 어렵다.
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`,
    { cache: "force-cache" }
  );

  if (!response.ok) return <div>오류가 발생했습니다.</div>;

  const books: BookData[] = await response.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
