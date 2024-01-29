import styles from './NavBar.module.css'
import carrito from '../../assets/carrito.png'

export const CartWidget = () => {
    return (
        <div>
            <button className={styles.iconCart}>
                <img src={carrito} alt="carrito" />
                <p>5</p>
            </button>
        </div>
    )
}
