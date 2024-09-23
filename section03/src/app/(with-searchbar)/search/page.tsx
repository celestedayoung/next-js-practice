export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return <div>search page {searchParams.q}</div>;
}
