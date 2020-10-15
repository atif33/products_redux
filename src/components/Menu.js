import React from "react";
import {useSelector} from "react-redux";

const Menu = () => {
    const products = useSelector((state) => state.myProduct.products);

    return (
        <nav className="navbar navbar-light bg-light">
            {products.map((productId) => (
                <a className="navbar-brand" href="#">Navbar ==>{productId.id}</a>
            ))}

        </nav>

    )
};
export default Menu;
