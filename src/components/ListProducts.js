import React, {useState, useEffect} from "react";

function ListProducts() {

    const myProducts = [
        {id: 1, name: "Samsung"},
        {id: 2, name: "Iphone"},
        {id: 3, name: "xiomi"}
    ];

    const [products, setProducts] = useState(myProducts);

    useEffect(() => {

    });

    return (
        <div>
            <h2>List of Products</h2>
            <ul className="list-group">
                {products.map((product) => (
                    <li className="list-group-item" key={product.id}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListProducts;
