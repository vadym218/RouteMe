import { useEffect } from 'react'
import styles from './styles.module.css'

export default function Dropdown({ preview, content, showClass }) {
    useEffect(() => {
        document.getElementById(content.props.id).classList.add(styles.content)
    }, [])

    const show = () => { document.getElementById(content.props.id).classList.add(showClass) }
    const hide = () => { document.getElementById(content.props.id).classList.remove(showClass) }
    
    return (
        <div id={styles.dropdown} onMouseEnter={show} onMouseLeave={hide}>
            {preview}
            <i id={styles.icon} className="fas fa-caret-down"></i>
            {content}
        </div>
    )
}