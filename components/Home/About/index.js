import styles from './styles.module.css'

export default function About({toggleAbout}) {
    return (
        <section id={styles.about}>
            <button id={styles.hideBtn} onClick={toggleAbout}><i className="fas fa-chevron-down" /></button>
            <p className={styles.remarks}>made by <a id={styles.name} href="https://www.linkedin.com/in/vadym-repetskyi-1106b1180/" target="blank">Vadym Repetskyi <i className="fab fa-linkedin"/></a> in 2021</p>
            <p className={styles.remarks}>contact: <a id={styles.email} href="mailto:vadym838@gmail.com">vadym838@gmail.com</a></p>
        </section>
    )
}