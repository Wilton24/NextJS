import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";


export default function MainHeader() {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} href="/">
                <Image src={logoImg} alt="NextLevel Food Logo" priority /></Link>
            <h2>NextLevel Food</h2>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Browse Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}