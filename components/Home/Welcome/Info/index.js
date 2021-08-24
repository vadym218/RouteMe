import Link from 'next/link'
import styles from './styles.module.css'

export default function Info({exploreClick}) {
    return (
        <div id={styles.info}>
            <h1 id={styles.italy}>Italy</h1>
            <p className={styles.text}>
                <button className={styles.link} onClick={exploreClick}>#explore</button> amazing stories that happened on its streets        
            </p>
        </div>
    )
}