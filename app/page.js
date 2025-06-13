import Link from "next/link";
export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        href="/news"
        style={{
          fontSize: "30px",
        }}
      >
        News
      </Link>
    </div>
  );
}
