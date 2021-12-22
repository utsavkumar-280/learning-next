import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Project() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Project</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Welcome to Project page</h1>
				<Link href="/project/1">
					<a>Project 1</a>
				</Link>
				<Link href="/project/2">
					<a>Project 2</a>
				</Link>
				<Link href="/project/infinity">
					<a>Project infinity</a>
				</Link>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
