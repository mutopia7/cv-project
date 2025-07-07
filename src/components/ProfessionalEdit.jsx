import styles from '../styles/ProfessionalEdit.module.css'
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'
import { MdWork } from "react-icons/md";

function ProfessionalEditItem({ professionalData, onChange, onDelete, onSave, onCancel, setOpenId, isNew = false }) {

    const handleChange = (e) => {
        if (isNew) {
            onChange(e); // just event
        } else {
            onChange(e, professionalData.id); // event و id
        }
    };

    return (
        <form action="" className={styles.formSec}>
            <label htmlFor="company">
                Company Name:
                <input
                    type="text"
                    name='company'
                    id='company'
                    value={professionalData.company}
                    placeholder='Enter Company Name'
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="position">
                Position Title:
                <input
                    type="text"
                    name='position'
                    id='position'
                    value={professionalData.position}
                    placeholder='Enter Position Title'
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="proStartDate">
                Start Date:
                <input
                    type="month"
                    name='proStartDate'
                    id='proStartDate'
                    value={professionalData.proStartDate}
                    placeholder='Enter start date'
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="proEndDate">
                End Date:
                <input
                    type="month"
                    name='proEndDate'
                    id='proEndDate'
                    value={professionalData.proEndDate}
                    placeholder='Enter End date'
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="Prolocation">
                Location:
                <input
                    type='text'
                    name='location'
                    id='Prolocation'
                    value={professionalData.location}
                    placeholder='Enter Location'
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="description">
                Description:
                <input
                    type='text'
                    name='description'
                    id='description'
                    value={professionalData.description}
                    placeholder='Enter Description'
                    onChange={handleChange}
                />
            </label>


            <div className={styles.btnGroup}>
                <button type='button' className={styles.delBtn} onClick={() => { isNew ? onDelete() : onDelete(professionalData.id) }}>Delete</button>

                <div className={styles.bothBtn}>
                    <button type='button' className={styles.cancelBtn} onClick={() => { isNew ? onCancel() : setOpenId(null) }}>Cancel</button>

                    <button type='button' className={styles.saveBtn} onClick={() => { isNew ? onSave(professionalData) : setOpenId(null) }}>Save</button>
                </div>


            </div>
        </form>
    )
}


function ProfessionalEdit({ professionalList, onChange, setProfessionalList }) {

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


    // for new Professional Experience
    const [newProfessional, setNewProfessional] = useState(null);

    function addProfessional() {
        setNewProfessional({
            id: crypto.randomUUID(),
            company: '',
            position: '',
            proStartDate: '',
            proEndDate: '',
            location: '',
            description: ''
        });
        setOpenId(null); // close all of the other forms
    }

    // for save new professional experience
    function saveNewProfessional(item) {
        setProfessionalList(prev => [...prev, item]);
        setNewProfessional(null);
    }

    // for cancel new Professional
    function cancelNewProfessional() {
        setNewProfessional(null);
    }

    // for delete Professional
    function deleteProfessional(id) {
        setProfessionalList(prev => prev.filter(item => item.id !== id));
        if (openId === id) setOpenId(null);
    }

    // for delete new Professional
    function deleteNewProfessional() {
        setNewProfessional(null);
    }


    return (
        <section className={styles.editSec}>
            <h2 className={styles.formHeader}>
                <div className={styles.formHeaderTitle}>
                    <MdWork aria-hidden="true" />
                    <span>Experience</span>
                </div>

                <FaChevronDown className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`} onClick={toggleOpen} />
            </h2>

            {isOpen && professionalList.map(item => (
                <div key={item.id}>
                    <button
                        type='button'
                        className={`${styles.itemsBtn} ${openId === item.id ? styles.selectForm : ''}`}
                        onClick={() => toggleItem(item.id)}
                    >
                        {item.company || 'UnTitled'}
                    </button>


                    {openId === item.id && (
                        <ProfessionalEditItem
                            professionalData={item}
                            onChange={(e) => onChange(e, item.id)}
                            setOpenId={setOpenId}
                            onDelete={deleteProfessional}
                        />
                    )}
                </div>

            ))}

            {newProfessional && (
                <ProfessionalEditItem
                    professionalData={newProfessional}
                    onChange={(e) => {
                        const { name, value } = e.target;
                        setNewProfessional(prev => ({ ...prev, [name]: value }));
                    }}
                    onSave={saveNewProfessional}
                    onCancel={cancelNewProfessional}
                    onDelete={deleteNewProfessional}
                    setOpenId={setOpenId}
                    isNew={true}
                />
            )}


            <button type='button' onClick={addProfessional} className={styles.addProfessionalBtn}>+ Exprience</button>

        </section>
    )
}


export default ProfessionalEdit;