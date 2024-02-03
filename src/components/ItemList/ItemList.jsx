

export const ItemList = ({productos}) => {
    return (
        <div>
            <h1>Productos</h1>
            {productos.length > 0 &&
                productos.map((producto) => {
                    return (
                        <div key={producto.id} >
                            <img src={producto.image} alt={producto.title} />
                            <h2> {producto.title} </h2>
                            <p> {producto.price} </p>
                            <p> {producto.description} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}
