import type { BookData } from "@/types";
import Link from "next/link";
import style from "./book-item.module.css";

export default function BookItem({
  id,
  title,
  subtitle,
  author,
  publisher,
  description,
  coverImgUrl,
}: BookData) {
  return (
    <Link href={`/book{/${id}}`} className={style.container}>
      <img src={coverImgUrl} />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subtitle}>{subtitle}</div>
        <br />
      </div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
    </Link>
  );
}
