import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";


export default function MainHeader() {
    return (
        <header className={styles.logo}>
            <Link href="/">
                <img src={logoImg.src} alt="NextLevel Food Logo" /></Link>
            Next Level Food
            <nav>
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