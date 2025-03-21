import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Delete, BackArrow } from "../assets/svgs";

function cartCard(name, image, price, id) {
    const remove = (id) => {
        const storeItems = JSON.parse(localStorage.getItem("item"));
        console.log(storeItems)
        const updateItem = storeItems.filter(item => item.id !== id);
        console.log(updateItem)
        localStorage.setItem("item", JSON.stringify(updateItem));
        console.log(localStorage.getItem("item"))
    }
    return (
        <div className="cartPageCard">
            <img src={image} alt={name} className="cartImg" />
            <div className="cartPagedetails">
                <span>{name}</span>
                <span style={{ color: 'rgba(43, 46, 225, 1)', padding: 10 }}># {price}</span>
            </div>
            <button id="dltBTn" onClick={() => remove(id)}>
                <Delete />
            </button>
        </div>
    )
}
const cartItem = [];
const checkCart = () => {
    const itemArray = localStorage.getItem("item")
    return itemArray ? JSON.parse(itemArray) : cartItem;
}


function Cart() {
    const [items, setItem] = useState(() => checkCart())
    useEffect(() => setItem(items), [items])
    console.log(items)
    const totalPrice = items.reduce((a, item) => {
        return a + item.price;
    }, 0)
    return (
        <div>
            <nav id="cartNav">
                <NavLink push to={"/"}><button> <BackArrow /></button></NavLink>
                <span id="cartheading">Cart</span>
            </nav>
            <div className="cartContainer">
                <main>
                    {
                        items.map((item) =>
                            cartCard(item.phoneName, item.image, item.price, item.id)


                        )
                    }
                </main>
                <div id="cartCheckout">
                    <hr />
                    <div id="summary">
                        <span>Total</span>
                        <span>#{totalPrice}

                        </span>
                    </div>
                    <NavLink push to={"/checkout"}>
                        <button id="cartCheckoutbutton">Checkout</button></NavLink>
                </div>
            </div>
        </div>
    )
}
export default Cart;