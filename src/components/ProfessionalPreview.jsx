import styles from '../styles/ProfessionalPreview.module.css'

function ProfessionalItem({professionalData}){
    const {company, position , proStartDate, proEndDate, location, description} = professionalData;

    return (
        <div className={styles.infSec}>
                <div className={styles.timeAndLoc}>
                    <p>{proStartDate} / {proEndDate}</p>
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


function ProfessionalPreview(){
    return (
        <div className={styles.l}>dsddsf</div>
    )
}


export default ProfessionalPreview;