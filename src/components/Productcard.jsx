import Iphone from "../assets/images/iphoneads1.png"
import { useState, useEffect } from "react";


const phones = [
    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`,
        id: 1,
    },

    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`,
        id: 2,
    },
    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`,
        id: 3,
    },
    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`,
        id: 4,
    },
    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`,
        id: 5,
    },
    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`,
        id: 6,
    },
    {
        make: "samsung",
        image: Iphone,
        name: "Samsusng A51",
        price: 1000000,
        details: `6.7" - 64GBROM`,
        id: 7,
    },
    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`,
        id: 8,
    },
    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`,
        id: 9,
    },
    {
        make: "samsung",
        image: Iphone,
        name: "Samsusng A51",
        price: 1000000,
        details: `6.7" - 64GBROM`,
        id: 10,
    },
    {
        make: "samsung",
        image: Iphone,
        name: "Samsusng A51",
        price: 1000000,
        details: `6.7" - 64GBROM`,
        id: 11,
    },
    {
        make: "samsung",
        image: Iphone,
        name: "Samsusng A51",
        price: 1000000,
        details: `6.7" - 64GBROM`,
        id: 12,
    },
];

function phoneCard(image, name, price, details, addToCartFtn, id) {

    return <div className="prod-item">
        <img src={image} alt={name} />
        <div className="detail-conatainer">
            <p className="prodName">{name}</p>
            <p className="details">{details}</p>
            <p className="price"># {price}</p>
            <button data-testid="btnForAddtoCart" className="add-to-cart-btn" onClick={() => (
                addToCartFtn(image, name, price, id)

            )}>Add to Cart</button>
        </div>
    </div >
}

const PhoneCardArray = (props) => {
    let products = props.prod;
    let inView = props.view;
    let addCartftn = props.func
    const [phone, setPhone] = useState("all");
    useEffect(() => { setPhone(inView) }, [inView]);
    let displayedPhones;
    if (phone === "all") {
        displayedPhones = products;
    } else {
        displayedPhones = products.filter(product => inView === product.make)
    }
    return <div >
        <div className="prod-container">
            {displayedPhones.map((item =>
                phoneCard(item.image, item.name, item.price, item.details, addCartftn, item.id)

            ))}
        </div>
    </div>
};

const phoneCart = []
const checked = () => {
    const checkstorage = localStorage.getItem('item')
    return checkstorage ? JSON.parse(checkstorage) : phoneCart;
}

checked();





function ProductSection(props) {
    let setCount = props.function
    const [itemNo, setCart] = useState(phoneCart.length);

    function cartIncrement(image, name, price, id) {
        phoneCart.push({ phoneName: name, image: image, price: price, id: id });
        setCart(prevNo => {
            let newNum = prevNo + 1;
            setCount(newNum)
            localStorage.setItem("itemNo", `${newNum}`);
            localStorage.setItem("item", JSON.stringify(phoneCart))
            console.log(phoneCart.length)
            return newNum;
        });




    }
    const [inView, setView] = useState("all");

    function btnFunction(view) {
        setView(view)
    }

    const btnStyle = (btnId) => ({
        backgroundColor: inView === btnId ? "rgba(9, 10, 65, 1)" : "rgba(243, 240, 251, 1)",
        color: inView === btnId ? "rgba(255, 255, 255, 1)" : "",
    });


    return <div id="products">
        <div id="filter-btn-container">
            <button style={btnStyle("all")} onClick={() => btnFunction("all")} id="all">Popular Products</button>
            <button style={btnStyle("iphone")} onClick={() => btnFunction("iphone")} id="iphone">Apple</button>
            <button style={btnStyle("samsung")} onClick={() => btnFunction("samsung")} id="samsung">Samsung</button>
        </div>

        <PhoneCardArray prod={phones} view={inView} func={cartIncrement} />


    </div>
}

export default ProductSection;