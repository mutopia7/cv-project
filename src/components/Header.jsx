import styles from '../styles/Header.module.css'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'; 


function Header({ name, email, phone, address }) {
    return (
        <header className={styles.customHeader} aria-label="User personal information header">
            <h1 className={styles.headerName}>{name} </h1>
            <div className={styles.headerInf}>
                <span><MdEmail />{email} </span>
                <span><MdPhone />{phone}</span>
                <span><MdLocationOn />{address}</span>
            </div>

        </header>

    )
}

export default Header