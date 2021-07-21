import styles from './Restaurentcard.module.css'

export function RestaurentCard({ card }) {
    return <>
        <div className={styles.box}>
        <div className={styles.conatiner}><div ><img src={card.imglink} alt=""/></div>
           <div>
            <h3>item:{card.foodname}</h3>
            <p>rating:{card.totalvotes}</p>
            <p>review:{card.reviews}</p> <p>{ card.costforone}</p>
            <p> category:{card.categories }</p>
           </div>
            </div>
         </div>
    </>
}