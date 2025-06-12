'use client'
import { useRouter } from "next/navigation";
export default function AboutDetail({ params }) {
  const router = useRouter();
  const data = [
    { id: "1", title: "Sport", description: "Sport News" },
    { id: "2", title: "Policy", description: "Policy News" },
    { id: "3", title: "Crypto", description: "Crypto News" },
    { id: "4", title: "Game", description: "Game News" },
    { id: "5", title: "Technology", description: "Technology News" },
  ];

  const newsItem = data.find(item => item.id == params.id);

  if (!newsItem) {
    return <h2>News not found</h2>;
  }
  return (
    <div style={{ padding: 30 }}>
      <h1>{newsItem.id}. {newsItem.title}</h1>
      <p><strong>Description: </strong>{newsItem.description}</p>
      <button onClick={() => router.back()} style={{ border: "2px solid red", width: "70px", height: "30px", borderRadius: "5px", cursor: "pointer" }}>Go Back</button>
    </div>
  );
}
