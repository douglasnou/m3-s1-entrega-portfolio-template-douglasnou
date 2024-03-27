export const TechCard = ({technologies})=>{
    return(
        <li className='techcard'>
            <img src={technologies.img} />
            <h3 className='title sm center'>{technologies.name}</h3>
        </li>
    )
}