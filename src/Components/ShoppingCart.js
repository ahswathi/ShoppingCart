import React, { useState } from "react";

let ShoppingCart = () => {
    let [state, setState] = useState({
        products: [
            {
                sno: '1',
                image: 'https://staticimg.titan.co.in/Fastrack/Catalog/38072AP03_1.jpg?pView=pdp',
                name: 'watch',
                price: 1500,
                qty: 1
            },
            {
                sno: '2',
                image: 'https://staticimg.titan.co.in/Fastrack/Catalog/1230SL05_1.jpg',
                name: 'watch',
                price: 1500,
                qty: 1
            },
            {
                sno: '3',
                image: 'https://staticimg.titan.co.in/Fastrack/Catalog/38072AP03_1.jpg?pView=pdp',
                name: 'watch',
                price: 1500,
                qty: 1
            },
            {
                sno: '4',
                image: 'https://staticimg.titan.co.in/Fastrack/Catalog/38072AP03_1.jpg?pView=pdp',
                name: 'watch',
                price: 1500,
                qty: 1
            }
        ]
    });

    let {products} = state; // destructuring

    let incproduct = (productId) => {
        /* filter the data for updating the  quantity */
        let items = products.map(product => {
            if (product.sno === productId) {
                return {
                    ...product,  //spread operator
                    qty: product.qty + 1  /* state.product.qty + 1 */
                }
            }
            return product;
        });
        setState((state) => ({
            products: [...items]
        }));
    };

    let decproduct = (productId) => {
        let items = products.map(product => {
            if (product.sno === productId) {
                return {
                    ...product,  //spread operator
                    qty: product.qty - 1 > 0 ? product.qty - 1 : 0 /* state.product.qty + 1 */
                /*     (product.qty - 1) >(0)? true         or false */
                }
            }
            return product;
        });
        setState((state) => ({
            products: [...items]
        }));
    };

    let grandTotal = () => {
        let total = 0;
        for(let product of products){
            total += product.price * product.qty;
        }
        return total;
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Shopping Cart</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <table className="table table-striped text-center table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    products.map((product) => {
                                        return (
                                            <tr key={product.sno}>
                                                <td> {product.sno}</td>
                                                <td> <img src={product.image} width={50} height={50}  alt="" /> </td>
                                                <td>{product.name}</td>
                                                <td>{product.price.toFixed(2)}</td>
                                                <td>
                                                    <i onClick = {() => decproduct(product.sno)} className="fa fa-minus-square mx-1"></i>
                                                    {product.qty}
                                                    <i onClick = {() => incproduct(product.sno)} className="fa fa-plus-square mx-1"></i>
                                                </td>
                                                <td>{product.qty * product.price}</td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td colSpan={4}></td>
                                    <td>Grand Total</td>
                                    <td>{grandTotal()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShoppingCart;