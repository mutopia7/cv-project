import styles from '../styles/EducationEdit.module.css'
import { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa'


function EducationEditItem({ educationData, onChange, onDelete, onSave, onCancel, setOpenId, isNew = false }) {

    const handleChange = (e) => {
        if (isNew) {
            onChange(e); // just event
        } else {
            onChange(e, educationData.id); // event و id
        }
    };

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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="eduLocation">
                Location:
                <input
                    type='text'
                    name='location'
                    id='eduLocation'
                    value={educationData.location}
                    placeholder='Enter Location'
                    onChange={handleChange}
                />
            </label>
            <div className={styles.btnGroup}>
                <button type='button' className={styles.delBtn} onClick={() => {isNew ? onDelete() : onDelete(educationData.id)}}>Delete</button>

                <div className={styles.bothBtn}>
                    <button type='button' className={styles.cancelBtn} onClick={() => {isNew ? onCancel() : setOpenId(null)}}>Cancel</button>

                    <button type='button' className={styles.saveBtn} onClick={() => {isNew ? onSave(educationData) : setOpenId(null)}}>Save</button>
                </div>


            </div>
        </form>
    )
}


function EducationEdit({ educationList, onChange, setEducationList }) {

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


    // for new education
    const [newEducation, setNewEducation] = useState(null);

    function addEducation() {
        setNewEducation({
            id: crypto.randomUUID(),
            school: '',
            degree: '',
            eduStartDate: '',
            eduEndDate: '',
            location: '',
        });
        setOpenId(null); // close all of the other forms
    }

    // for save new education
    function saveNewEducation(item) {
        setEducationList(prev => [...prev, item]);
        setNewEducation(null);
    }

    // for cancel new education
    function cancelNewEducation() {
        setNewEducation(null);
    }

    // for delete education
    function deleteEducation(id) {
        setEducationList(prev => prev.filter(item => item.id !== id));
        if (openId === id) setOpenId(null);
    }

    // for delete new education
    function deleteNewEducation() {
        setNewEducation(null);
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
                        type='button'
                        className={`${styles.itemsBtn} ${openId === item.id ? styles.selectForm : ''}`}
                        onClick={() => toggleItem(item.id)}
                    >
                        {item.school || 'UnTitled'}
                    </button>


                    {openId === item.id && (
                        <EducationEditItem
                            educationData={item}
                            onChange={(e) => onChange(e, item.id)}
                            setOpenId={setOpenId}
                            onDelete={deleteEducation}
                        />
                    )}
                </div>

            ))}

            {newEducation && (
                <EducationEditItem
                    educationData={newEducation}
                    onChange={(e) => {
                        const { name, value } = e.target;
                        setNewEducation(prev => ({ ...prev, [name]: value }));
                    }}
                    onSave={saveNewEducation}
                    onCancel={cancelNewEducation}
                    onDelete={deleteNewEducation}
                    setOpenId={setOpenId}
                    isNew = {true}
                />
            )}


            <button type='button' onClick={addEducation} className={styles.addEducationBtn}>+ Education</button>

        </section>
    )
}

export default EducationEdit