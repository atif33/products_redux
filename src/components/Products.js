import React, {useState} from "react";
import {useDispatch} from "react-redux";
import addNewProduct from "../store/actions/productAction";

export function Products() {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        id: 0,
        name: ''
    });

    const handleChange = (even) => {
        setProduct({...product, name: even.target.value})

    };

    // arrow func
    const submitForm = (e) => {
        e.preventDefault();
        product.id = Math.random() * 100;
        dispatch(addNewProduct(product));
    };
    return (
        <form onSubmit={submitForm}>
            <div className="form-group">
                <label className="">Product</label>
                <input type="text" className="form-control"
                       value={product.name}
                       onChange={handleChange}
                       placeholder="Name of the product"/>
            </div>
            {JSON.stringify(product)}
            <button className="btn btn-success btn-block">Submit</button>
        </form>
    )

}
