import styles from './header.module.scss'

export default function Header() {
 return(
   <header className={styles.heandleContainer}>
     <div className={styles.heandleContent}>
       <img src="./Logo.svg" alt="logo" />
     </div>
   </header>
 )
}
