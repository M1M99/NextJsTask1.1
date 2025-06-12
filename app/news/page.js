import Link from "next/link"
import styles from "../page.module.css"

export default function News() {
    let data = [
        { id: "1", title: "Sport", description:"Sport News"},
        { id: "2", title: "Policy", description:"Policy News" },
        { id: "3", title: "Crypto", description:"Crypto News" },
        { id: "4", title: "Game", description:"Game News" },
        { id: "5", title: "Tecnology" , description:"Tecnology News"},
    ]
    return (
        <>
            <div className={styles.page} style={{ padding: "20px" }}>
                <h2>News</h2>
                <div>
                    {data.map((data, keyy) => (
                        <li key={keyy} className={styles.listItem}>
                            <Link href={`/news/${data.id}`} className={styles.link1}>{data.title}</Link>
                        </li>
                    ))}
                </div>
            </div>
        </>
    )
}