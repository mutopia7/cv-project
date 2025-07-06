import styles from '../styles/EducationEdit.module.css'
import { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa'


function EducationEditItem({ educationData, onChange }) {
    return (
        <form action="" className={styles.formSec}>
            <label htmlFor="school">
                School:
                <input
                    type="text"
                    name='school'
                    id='school'
                    value={educationData.school}
                    placeholder='Enter school/ university'
                    onChange={(e) => onChange(e, educationData.id)}
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
                    onChange={(e) => onChange(e, educationData.id)}
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
                    onChange={(e) => onChange(e, educationData.id)}
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
                    onChange={(e) => onChange(e, educationData.id)}
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
                    onChange={(e) => onChange(e, educationData.id)}
                />
            </label>
        </form>
    )
}


function EducationEdit({ educationList, onChange }) {

    // for open and close formSec
    const [isOpen, setIsOpen] = useState(true)

    function toggleOpen() {
        setIsOpen(prev => !prev)
    }

    // for open and close formItem
    const [openId, setOpenId] = useState(null)

    function toggleItem(id) {
        setOpenId(prev => (prev === id ? null : id));
    }



    return (
        <section className={styles.editSec}>
            <h2 className={styles.formHeader}>
                <div className={styles.formHeaderTitle}>
                    <FaGraduationCap aria-hidden="true" />
                    <span>Education</span>
                </div>

                <FaChevronDown className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`} onClick={toggleOpen} />
            </h2>
            
            {isOpen && educationList.map(item => (
                <div key={item.id}>
                    <button
                        key={item.id}
                        type='button'
                        className={`${styles.itemsBtn} ${openId === item.id ? styles.selectForm : '' }`}
                        onClick={() => toggleItem(item.id)}
                    >
                        {item.school}
                    </button>

                    
                    {openId === item.id && (
                        <EducationEditItem
                            educationData={item}
                            onChange={(e) => onChange(e, item.id)}
                        />
                    )}
                </div>

            ))}

        </section>
    )
}

export default EducationEdit