import { NavLink } from "react-router-dom";
import { Checkout1 } from "../assets/svgs";
function Checkout() {
    return (
        <div>
            <nav>
                <NavLink push to={"/cart"}>X</NavLink >
                <p>Checkout</p>
            </nav>
            <div id="checkout-main">
                <div id="checkout-stage">
                    <span>
                        <Checkout1 />
                        Shipping
                    </span>

                    <span>
                        <Checkout1 />
                        Payment
                    </span>

                    <span>
                        <span style={{ width: 55, height: 55, borderRadius: 100, background: "black" }}>3</span>
                        Shipping
                    </span>


                </div>

            </div>
        </div>
    )


}

export default Checkout;