import { ProjectList } from './ProjectList'
import styles from './style.module.css'

export const ProjectSection = ()=>{
    return(
        <section>
           <div className={`${styles.projectSection} container`}>
                <h2 className='title md'>Projetos</h2>
                <ProjectList />
           </div>
        </section>
    )
}