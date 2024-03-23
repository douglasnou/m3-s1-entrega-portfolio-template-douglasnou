import { user } from '../../data/user'
import  whatsAppIcon  from '../../assets/whatsapp-icon.png'
import  linkedinIcon  from '../../assets/linkedin-icon.png'
import  gitHubIcon  from '../../assets/github-icon.png'
import styles from './style.module.css'

export const Footer = ()=>{
    return(
        <footer>
            <div className={`${styles.footerSection} container`}>
                <div className={styles.footerSubSection}>
                    <h2 className='title md'>Contato</h2>
                    <div className={styles.footerIcons}>
                        <img src={whatsAppIcon} alt='logo do whatsapp'/>
                        <img src={linkedinIcon} alt='logo do linkedin' />
                        <img src={gitHubIcon} alt='logo do github'/>
                    </div>
                </div>
                <p className='paragraph'>Todos os direitos reservados - {user}</p>
            </div>
        </footer>
    )
}