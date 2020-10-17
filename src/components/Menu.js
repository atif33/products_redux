import React from "react";
import {useSelector} from "react-redux";

const Menu = () => {
    const products = useSelector((state) => state.myProduct.products);

    return (
        <nav className="navbar navbar-light bg-light">
            {products.map((productId, index) => (
                <a className="navbar-brand" href="#" key={productId.id}>Navbar ==>{productId.id}</a>
            ))}

        </nav>

    )
};
export default Menu;
