import styles from './styles.module.css'

export default function Footer({exploreClick}) {
    return (
        <footer id={styles.footer}>
            <a href="https://www.youtube.com/watch?v=L2q318dZKP0" target="blank">
                <i id={styles.source} className="fal fa-external-link-square-alt" />
            </a>
            <button id={styles.exploreBtn} onClick={exploreClick}>
                <i className="fal fa-angle-double-down" />
            </button>
            <a href="https://www.artlebedev.ru/age/vector/" target="blank">
                <img id={styles.disclaimer} src="0+.svg" alt="0+" />
            </a>
        </footer>
    )
}