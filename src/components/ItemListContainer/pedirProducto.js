import data from '../../data/productos.json'

const pedirProducto = () => {
    return new Promise((resolve, rejected) => {
        resolve(data)
    })
}

export default pedirProducto