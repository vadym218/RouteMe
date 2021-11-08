import { useEffect } from 'react'
import styles from './styles.module.css'

export default function Explore({ subjects, places, setExploreElements, toggleAbout}) {
    useEffect(() => {
        setExploreElements(
            document.getElementById(styles.explore),
            document.getElementById(styles.content)
        )
    })

    return (
        <section id={styles.explore}>
            <div id={styles.content}>
                <div id={styles.filter}>
                    <div id={styles.subject}>
                        {
                            subjects.map((subject) => subject.name)
                        }
                    </div>
                    <div id={styles.place}>
                        {
                            places.map((place) => place.name)
                        }
                    </div>
                </div>
                <div id={styles.carousel}></div>
                <div id={styles.shortcuts}>
                    <button><i className="fas fa-dice" /></button>
                    <button><i className="fas fa-list-ul" /></button>
                    <button onClick={toggleAbout}><i className="fas fa-info" /></button>
                    <button onClick={() => {history.pushState({}, ''); window.scrollTo(0, 0)}}><i className="fas fa-angle-double-up" /></button>
                </div>
            </div>
        </section>
    )
}