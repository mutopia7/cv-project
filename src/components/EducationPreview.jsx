import styles from '../styles/EducationPreview.module.css'

function EducationPreview({eduStartDate, eduEndDate , location, school, degree}){
    return (
        <section className={styles.previewSec}>
            <h2 className={styles.infHead}>Education</h2>
            <div className={styles.infSec}>
                <div className={styles.timeAndLoc}>
                    <p>{eduStartDate} / {eduEndDate}</p>
                    <p>{location}</p>
                </div>

                <div className={styles.inf}>
                    <h3 className={styles.bold}>{school}</h3>
                    <p>{degree}</p>
                </div>
            </div>
        </section>
    )
}


export default EducationPreview