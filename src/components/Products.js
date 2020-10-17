import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addNewProduct, resetStoreProducts} from "../store/actions/productAction";

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
        console.log('Submit');
        e.preventDefault();
        product.id = Math.random() * 100;
        dispatch(addNewProduct(product));
    };

    const resetStore = (event) => {
        console.log('delete');
        event.preventDefault();
        dispatch(resetStoreProducts())

    };
    return (
        <form>
            <div className="form-group">
                <label className="">Product</label>
                <input type="text" className="form-control"
                       value={product.name}
                       onChange={handleChange}
                       placeholder="Name of the product"/>
            </div>
            <button onClick={submitForm} className="btn btn-success">Submit</button>
            <button onClick={resetStore} className="btn btn-danger">Delete</button>
        </form>
    )

}
