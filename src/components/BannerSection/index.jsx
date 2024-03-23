import { username } from '../../data/user'
import bannerImg from './../../assets/banner-img.png'
import styles from './style.module.css'

export const BannerSection = ()=>{
    return(
        <section>
           <div className={`${styles.bannerSection} container`}>
                <div className={styles.bannerSubSection}>
                    <label className='paragraph sm label'>{username}</label>
                    <h1 className='title lg'>Bem vindo ao meu portfólio</h1>
                    <p className='paragraph'>Uma frase interessante sobre mim</p>
                    <button className='btn'>Saiba mais</button>
                </div>
                <img src={bannerImg}/>
           </div>
        </section>
    )
}