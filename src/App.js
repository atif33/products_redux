import React from 'react';
import Menu from "./components/Menu";
import {Products} from "./components/Products";
import ListProducts from "./components/ListProducts";

function App() {
    return (
        <div>
            <Menu/>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Products/>
                    </div>

                    <div className="col-md-6 ml-4">
                        <ListProducts/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
