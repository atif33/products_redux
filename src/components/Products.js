import React, {Component} from "react";

export class Products extends Component {
        
    render() {
        return (
            <form>
                <div className="form-group">
                    <label className="">Product</label>
                    <input type="text" className="form-control" placeholder="Name of the product"/>
                </div>
                <button className="btn btn-success btn-block">Submit</button>
            </form>
        )
    }

}
