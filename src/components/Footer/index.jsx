import { user } from '../../data/user'
import styles from './style.module.css'
import { FooterIcons } from './FooterIcons'

export const Footer = ()=>{
    return(
        <footer>
            <div className={`${styles.footerSection} container`}>
                <div className={styles.footerSubSection}>
                    <h2 className='title md'>Contato</h2>
                    <FooterIcons />
                </div>
                <p className='paragraph'>Todos os direitos reservados - {user}</p>
            </div>
        </footer>
    )
}