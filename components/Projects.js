import styles from '../styles/Home.module.css'

export default function Projects({title, text}) {
    return(
        <div className={styles.project}>
            <h1>
                {text}
            </h1>
            {text}
        </div>
    )
}