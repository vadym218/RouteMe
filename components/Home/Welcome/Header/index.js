import Dropdown from '../../../Dropdown';
import styles from './styles.module.css'

export default function Header({exploreClick, toggleAbout}) {
    const dropdownPreview = <img className={styles.dropdownFlag} src="/IT.svg" />
    const dropdownContent =
        <div id={styles.dropdownContent}>
            <img className={styles.dropdownFlag} src="/UA.svg" />
            <img className={styles.dropdownFlag} src="/UK.svg" />
        </div>

    return (
        <header id={styles.header}>
            <div id={styles.logo}>
                <img src="/RouteStory.svg"/>
                <Dropdown preview={dropdownPreview} content={dropdownContent} showClass={styles.shown} />
            </div>

            <nav id={styles.nav}>
                <button className={styles.link} onClick={exploreClick}><span>Explore</span></button>    
                <a className={styles.link}><span>All articles</span></a>    
                <button className={styles.link} onClick={() => {history.pushState({}, ''); toggleAbout()}}><span>About us</span></button>    
            </nav>
        </header>
    )
}