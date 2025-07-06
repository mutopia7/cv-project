import styles from '../styles/EducationPreview.module.css'

function EducationItem({educationData}){
    const {eduStartDate, eduEndDate , location, school, degree} = educationData;

    return (
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
    )

}

function EducationPreview({educationList}){
    
    return (
        <section className={styles.previewSec}>
            <h2 className={styles.infHead}>Education</h2>
            {educationList.map(item => (
                <EducationItem 
                    key={item.id}
                    educationData={item}
                />
            ))}
        </section>
    )
}


export default EducationPreview