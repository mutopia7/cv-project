import styles from '../styles/EducationPreview.module.css'

function EducationPreview({time , loc, school, degree}){
    return (
        <section className={styles.previewSec}>
            <h2 className={styles.infHead}>Education</h2>
            <div className={styles.infSec}>
                <div className={styles.timeAndLoc}>
                    <p>{time} 03/2025 - Present</p>
                    <p>{loc} Online</p>
                </div>

                <div className={styles.inf}>
                    <h3 className={styles.bold}>{school} Odin Project</h3>
                    <p>{degree} Bachelors in FullStack</p>
                </div>
            </div>
        </section>
    )
}


export default EducationPreview