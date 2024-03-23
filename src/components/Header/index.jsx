import styles from './style.module.css'

export const Header = ()=>{
    return(
        <header>
            <div className={`${styles.headerSection} container`}>
                <h1 className='title sm'>Portfólio</h1>
                <div className={styles.headerAbout}>
                    <p className='paragraph sm'>Sobre</p>
                    <p className='paragraph sm'>Stack</p>
                    <p className='paragraph sm'>Projetos</p>
                </div>
                <button className='btn md'>Contato</button>
            </div>
        </header>
    )
}