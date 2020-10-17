import React, {useEffect} from "react";
import {useSelector} from "react-redux";

function ListProducts() {
    // get product in store
    const products = useSelector((state) => state.myProduct.products);
     const contacts = useSelector((state) => state.myContact.contact);


    // const [products, setProducts] = useState(myProducts);

    useEffect(() => {
        console.log('roro');

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
                {contacts.map((contact) => (
                    <li className="list-group-item" key={contact.id}>
                        {contact.firstName +' '+ contact.lastName}
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default ListProducts;
