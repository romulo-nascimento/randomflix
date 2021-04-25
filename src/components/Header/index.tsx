import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.scss'

const Header = () => {
    const today = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    })

    return (
        <header className={styles.header}>
            <h1>Random Sheldon</h1>
            <span className={styles.date}>{today}</span>
        </header>
    )
}


export default Header