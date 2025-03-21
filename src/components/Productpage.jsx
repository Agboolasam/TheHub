
import { MobileMart, CartIcon, SearchIcon } from "../assets/svgs"
import { NavLink } from "react-router-dom";
import ProductSection from "./Productcard";
import Iphone from "../assets/images/iphoneads1.png";
import Footer from "./Footer";
import { useState } from "react";

function Products() {

    const [count, setCount] = useState(0)
    function setCountFn(newCount) {
        setCount(newCount)
    }

    return (
        <div id="landing">
            <nav>
                <NavLink exact to="/">
                    <MobileMart id="MMmerch" />
                </NavLink>

                <aside>
                    <div id="searchbar">

                        <SearchIcon style={{ color: `rgba(10, 10, 11, 0.5)` }} />
                        <input type="text" data-testid="inputForSearch" placeholder="Search Product" />
                    </div>
                    <NavLink to={"./cart"}>
                        <div id="CartIcon">
                            <CartIcon data-testid="cartButton" />
                            <span id="cartItemNo">{count}
                            </span>
                        </div>

                    </NavLink>
                </aside>
            </nav>
            <div id="Hero">
                <div id="aside">
                    <h4>Iphone 13</h4>
                    <h1>
                        Incredible Camera
                        <br /> & Storage
                    </h1>

                    <button id="buynowBtn"> Buy Now</button>


                </div>
                <img src={Iphone} alt="iphone13" />
            </div>
            <ProductSection function={setCountFn} />
            <Footer />
        </div >
    )


}

export default Products;