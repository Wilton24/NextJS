"use client";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "../UI/NavLink";


export default function MainHeader() {

    const path = usePathname();
    return (
        <header className={styles.header}>
            <Link className={styles.logo} href="/">
                <Image src={logoImg} alt="NextLevel Food Logo" priority /></Link>
            <h2>NextLevel Food</h2>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink message="Join the Community" pathName="/community" />
                    </li>
                    <li>
                        <NavLink message="Browse Community" pathName="/meals" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}