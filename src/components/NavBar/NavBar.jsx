import styles from './NavBar.module.css'
import hogar from '../../assets/hogar.png'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
    return (
        <>
            <div className={styles.NavBar}>
                <div>
                    <h1>Perf Shop</h1>
                </div>
                <div className={styles.icons}>
                <img src={hogar} alt="home" />
                </div>
                <div className={styles.Pages}>
                    <h3>Page 1</h3>
                    <h3>Page 2</h3>
                    <h3>Page 3</h3>
                </div>
                <CartWidget />
                
            </div>

        </>
    )
}
