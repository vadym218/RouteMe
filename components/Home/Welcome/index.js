import React, { useEffect } from 'react'
import styles from './styles.module.css'
import Header from './Header'
import Info from './Info'
import Footer from './Footer'

export default function Welcome({toggleAbout}) {
    const exploreClick = () => {
        window.history.pushState({}, '', '');
        window.scrollTo({
            top: document.getElementById(styles.welcome).scrollHeight,
            behavior: 'smooth'
        })
    }
    
    const updateFlag = () => {
        document.documentElement.style.setProperty('--flag-progress', Math.min(window.pageYOffset / (document.getElementById(styles.flex).scrollHeight - 100), 1))
    }

    useEffect(() => {
        window.addEventListener('scroll', updateFlag)
        window.addEventListener('resize', updateFlag)
        return () => {
            window.removeEventListener('scroll', updateFlag)
            window.removeEventListener('resize', updateFlag)
        }
    }, [])

    return (
        <section id={styles.welcome}>
            <video id={styles.video} src="video.webm" autoPlay muted loop />
            <div id={styles.flex}>
                <Header exploreClick={exploreClick} toggleAbout={toggleAbout} />
                <Info exploreClick={exploreClick} />
                <Footer exploreClick={exploreClick} />
            </div>
            <div id={styles.flag}>
                <span />
                <span />
                <span />
            </div>
        </section>
    )
}