import Link from "next/link";
import styles from "../../app/page.module.css"
export default function About() {
  return (
    <div>
      <h2 className={styles.page} style={{padding:"20px"}}>
        About Page
      </h2>
    </div>
  )
}