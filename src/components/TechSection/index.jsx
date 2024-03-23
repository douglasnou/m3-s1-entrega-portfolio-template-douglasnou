import { TechList } from './TechList'
import styles from './style.module.css'

export const TechSection = ()=>{
    return(
        <section>
            <div className={`${styles.techSection} container`}>
                <h2 className='title md'>Tecnologias</h2>
                <TechList />
            </div>
        </section>
    )
}