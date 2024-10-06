"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function createReviewAction(formData: FormData) {
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  console.log(bookId, content, author);

  if (!bookId || !content || !author) return;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      }
    );
    // next server에게 해당 페이지를 재생성 해달라 요청하는 메서드
    // 1. 특정 주소의 해당하는 페이지만 재검증
    // revalidatePath(`/book/${bookId}`);

    // 2. 특정 경로의 모든 동적 페이지를 재검증 (폴더 이름을 명시하는 것)
    // revalidatePath("/book/[id]", "page");

    // 3. 특정 레이아웃을 갖는 모든 페이지를 재검증
    // revalidatePath("/(with-search-bar)", "layout");

    // 4. 모든 데이터를 재검증
    // revalidatePath("/", "layout");

    // 5. tag 값을 기준으로 데이터 캐시를 재검증 (fetch에 tag 방법을 말하는 것)
    // ex) await fetch('....', { next: tags: [`review-${bookId}`]})
    revalidateTag(`review-${bookId}`);

    console.log(response.status);
  } catch (err) {
    console.error(err);
  }
}
