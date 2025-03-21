import { PlusIcon, VisaIcon, MastercardIcon } from "../assets/svgs"


const footerArray = [
    { value: "INFORMATION" },
    { value: "OUR SERVICES" },
    { value: "MY ACCOUNT" },
    { value: "FOLLOW US" }]

function Misc(value) {
    return (
        <div className="tab">
            <span>{value}</span>
            <span><PlusIcon /></span>
        </div>
    )

}
function Footer() {
    return (
        <div className="Footer" >
            <div id="footer-section">
                {footerArray.map((item =>
                    Misc(item.value)
                ))}
            </div>
            <div id="FooterLayer">
                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", textAlign: "left" }}>
                    <span>Copyright <span style={{ color: "rgba(255, 0, 0, 1) " }}>TechMart systems Limited </span> 2024 All Rights Reserved</span>
                    <div id="footersvg" >
                        <VisaIcon />
                        <MastercardIcon />
                    </div>
                </div>
            </div>
        </div >
    )

}

export default Footer
