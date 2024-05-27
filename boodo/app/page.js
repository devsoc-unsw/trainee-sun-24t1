import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          B O O D O
        </h1>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/ghost.png"
          alt="/ghost"
          width={300}
          height={300}
          priority
        />
      </div>
      
    <div className={styles.button}>
      <Link href="/login">
        <h2>
          Login <span>-&gt;</span>
        </h2>
      </Link>
    </div>

    <div className={styles.button}>
      <Link href="/register">
        <h2>
          Register <span>-&gt;</span>
        </h2>
      </Link>
    </div>

    </main>
  );
}
