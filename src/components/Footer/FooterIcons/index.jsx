import  whatsAppIcon  from './../../../assets/whatsapp-icon.png'
import  linkedinIcon  from './../../../assets/linkedin-icon.png'
import  gitHubIcon  from './../../../assets/github-icon.png'
import styles from './../style.module.css'
export const FooterIcons = ()=>{
    return(
        <div className={styles.footerIcons}>
            <img src={whatsAppIcon} alt='logo do whatsapp'/>
            <img src={linkedinIcon} alt='logo do linkedin' />
            <img src={gitHubIcon} alt='logo do github'/>
        </div>
    )
}