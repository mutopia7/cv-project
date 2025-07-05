import styles from '../styles/Header.module.css'

function Header({ name, email, phone, address }) {
    return (
        <header className={styles.customHeader} aria-label="User personal information header">
            <h1>{name || "Rasool Vahid"} </h1>
            <div className={styles.headerInf}>
                <span>{email || "Mutopia20@gmail.com"} </span>
                <span>{phone || "+98 902 9292 409"}</span>
                <span>{address || "Rasht,IRI"}</span>
            </div>

        </header>

    )
}

export default Header