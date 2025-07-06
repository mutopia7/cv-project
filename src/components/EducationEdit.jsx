import styles from '../styles/EducationEdit.module.css'
import { FaGraduationCap } from 'react-icons/fa';

function EducationEdit({educationData, onChange}){
    return (
        <section className={styles.editSec}>
            <h2 className={styles.formHeader}>
                <FaGraduationCap aria-hidden="true" />
                <span>Education</span>
            </h2>
            <form action="" className={styles.formSec}>
                <label htmlFor="school">
                    School:
                    <input 
                    type="text"
                    name='school'
                    id='school'
                    value={educationData.school}
                    placeholder='Enter school/ university'
                    onChange={onChange}
                    />
                </label>

                <label htmlFor="degree">
                    Degree:
                    <input 
                    type="text"
                    name='degree'
                    id='degree'
                    value={educationData.degree}
                    placeholder='Enter Degree/ field of study'
                    onChange={onChange}
                    />
                </label>

                <label htmlFor="eduStartDate">
                    Start Date:
                    <input 
                    type="month"
                    name='eduStartDate'
                    id='eduStartDate'
                    value={educationData.eduStartDate}
                    placeholder='Enter start date'
                    onChange={onChange}
                    />
                </label>

                <label htmlFor="EduEndDate">
                    End Date:
                    <input 
                    type="month"
                    name='eduEndDate'
                    id='eduEndDate'
                    value={educationData.eduEndDate}
                    placeholder='Enter End date'
                    onChange={onChange}
                    />
                </label>

                <label htmlFor="location">
                    Location:
                    <input 
                    type='text'
                    name='location'
                    id='location'
                    value={educationData.location}
                    placeholder='Enter Location'
                    onChange={onChange}
                     />
                </label>
            </form>
        </section>
    )
}

export default EducationEdit