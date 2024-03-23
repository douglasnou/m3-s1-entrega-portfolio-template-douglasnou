import gitIcon from './../../../assets/git-icon.png'
import styles from './../style.module.css'

export const ProjectCard = ({projects})=>{
    return(
        <li className='projectcard'>
            <div className={styles.projectCardTitle}>
            <h3 className='title sm'>{projects.name}</h3>
            <img src={gitIcon}/>
            </div>
            <p className='paragraph'>{projects.description}</p>
            <a className={styles.projectLink} href='#'>Saiba mais</a>
        </li>
    )
}