import React from "react";
import "./ProductList.css";

interface productProps {
    items: {
        id:string,
        title:string, 
        price:number, 
        image:string, 
        description:string
    }[];
    onDeleteProduct:(id:string) => void
}

const ProductList:React.FC<productProps> = (props) => {
    return (
        <div className="container">
            <div className="row">
                {
                    props.items.map(item => {
                        return (
                            <div className="column" key={item.id}>
                                <div className="card">
                                    <img src="https://place-hold.it/300" alt="Avatar"/>
                                    <div className="card-info">
                                        <div className="card-price">
                                        <b>{item.title}</b>
                                            <span className="price">${item.price}</span>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                    <hr />
                                    <div className="buttonContainer">
                                        <span>Added 10min ago</span>
                                        <button color="secondary" onClick={props.onDeleteProduct.bind(null, item.id)} className="deleteButton">
                                            <i className="fas fa-minus-circle"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default ProductList;