import styles from '../styles/PersonalEdit.module.css'
import { useState } from 'react';

function PersonalEdit({formData, onChange}){
    return(
        <section className={styles.personalEdit}>
            <h2 className={styles.personalFormHeader}>Personal Details</h2>
            <form action="" className={styles.personalForm}>
                <label htmlFor="name">
                    Name:
                    <input
                     type="text"
                     name='name'
                     id='name'
                     value={formData.name}
                     placeholder='First and last name'
                     onChange={onChange}
                    />
                </label>

                <label htmlFor="email">
                    Email:
                    <input
                     type="email"
                     name='email'
                     id='email'
                     value={formData.email}
                     placeholder='Enter Email'
                     onChange={onChange}
                    />
                </label>

                <label htmlFor="phone">
                    Phone:
                    <input
                     type="tel"
                     name='phone'
                     id='phone'
                     value={formData.phone}
                     placeholder='Enter phone number'
                     onChange={onChange}
                    />
                </label>

                <label htmlFor="address">
                    Address:
                    <input
                     type="text"
                     name='address'
                     id='address'
                     value={formData.address}
                     placeholder='City, Country'
                     onChange={onChange}
                    />
                </label>
            </form>
        </section>
    )
}


export default PersonalEdit