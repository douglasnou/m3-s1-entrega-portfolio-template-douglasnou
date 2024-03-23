import {projects} from '../../../data/projects'
import { ProjectCard } from '../ProjectCard'
import styles from './../style.module.css'

export const ProjectList = ()=>{
    return(
        <ul className={styles.projectSubSection}>
            {projects.map((projects)=>
                <ProjectCard key={projects.id} projects={projects}/>
            )}
        </ul>
    )
}