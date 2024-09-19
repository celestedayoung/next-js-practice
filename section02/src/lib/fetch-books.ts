import { BookData } from "@/types";

// q?를 매개변수로 전달해 선택적으로 받을 수 있게 한다.
export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = `http://localhost:12345/book`;

  // q가 있으면 url을 검색 url로 바꿔준다.
  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
}
