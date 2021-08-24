import Link from 'next/link'
import styles from './styles.module.css'

export default function Header() {
    return (
        <>
        <h1>Create</h1>
        <nav id={styles.nav}>
            <Link href='/create/tag'><a></a></Link>
            <Link href='/create/article'><a></a></Link>
        </nav>
        </>
    )
}