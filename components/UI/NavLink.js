'use client';
import styles from "../main-header/main-header.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ message, pathName }) {
    const path = usePathname();
    return <Link href={pathName} className={path.startsWith(pathName) ? styles.active : undefined}>{message}</Link>
}