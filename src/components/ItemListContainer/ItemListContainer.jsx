import { useEffect, useState } from 'react'
import pedirProducto from './pedirProducto'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])


    useEffect(() => {
        pedirProducto().then((res) => {
            setProductos(res);
        })
    }, [])

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

