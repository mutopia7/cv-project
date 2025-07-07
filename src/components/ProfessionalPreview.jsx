import styles from '../styles/ProfessionalPreview.module.css'

function ProfessionalItem({professionalData}){
    const {company, position , proStartDate, proEndDate, location, description} = professionalData;

    return (
        <div className={styles.infSec}>
                <div className={styles.timeAndLoc}>
                    {proStartDate && <p>{proStartDate} / {proEndDate}</p>}
                    <p>{location}</p>
                </div>

                <div className={styles.inf}>
                    <h3 className={styles.bold}>{company}</h3>
                    <p>{position}</p>
                    <p>{description}</p>
                </div>
        </div>
    )

}


function ProfessionalPreview({professionalList}){
    return (
            <section className={styles.previewSec}>
                <h2 className={styles.infHead}>Professional Experience</h2>
                {professionalList.map(item => (
                    <ProfessionalItem 
                        key={item.id}
                        professionalData={item}
                    />
                ))}
            </section>
    )
}


export default ProfessionalPreview;