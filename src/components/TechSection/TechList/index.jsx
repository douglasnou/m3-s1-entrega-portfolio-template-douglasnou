import {technologies} from '../../../data/technologies'
import { TechCard } from '../TechCard'
import styles from './../style.module.css'

export const TechList = ()=>{
    return(
        <ul className={styles.techSubSection}>
            {technologies.map((technologies)=>
                <TechCard key={technologies.id} technologies={technologies}/>
            )}
        </ul>
    )
}