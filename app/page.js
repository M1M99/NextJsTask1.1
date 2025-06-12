import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page} style={{padding:"15px"}}>
      {/* <main className={styles.main}>
        <h1>Hello World</h1>
      </main> */}
      <header className="nav-link">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/news">News</Link>
        <Link href="/contact">Contact</Link>
      </header>
    </div>
  );
}
