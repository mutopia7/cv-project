import styles from '../styles/Header.module.css'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'; 


function Header({ name, email, phone, address }) {
    return (
        <header className={styles.customHeader} aria-label="User personal information header">
            <h1 className={styles.headerName}>{name || "Rasool Vahid"} </h1>
            <div className={styles.headerInf}>
                <span><MdEmail />{email || "Mutopia20@gmail.com"} </span>
                <span><MdPhone />{phone || "+98 902 9292 ***"}</span>
                <span><MdLocationOn />{address || "Rasht, IRI"}</span>
            </div>

        </header>

    )
}

export default Header