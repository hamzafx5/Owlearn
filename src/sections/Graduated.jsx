import clickUp from "../assets/images/png/clickup-logo.png";
import dropboxBlue from "../assets/images/png/dropbox_blue-logo.png";
import elastic from "../assets/images/png/eslastic-logo.png";
import github from "../assets/images/png/github-logo.png";
import freshboocks from "../assets/images/png/freshbooks-logo.png";
import helpScout from "../assets/images/png/helpscout-logo.png";
import hubSpot from "../assets/images/png/HubSpot-logo.png";
import intuit from "../assets/images/png/intuit-logo.png";
import google from "../assets/images/png/google-2-logo.png";
import paychex from "../assets/images/png/paychex-logo.png";
import salesforce from "../assets/images/png/salesforce-logo.png";
import sap from "../assets/images/png/sap-logo.png";
import twilioSegment from "../assets/images/png/twilio-segment-logo.png";
import servicenow from "../assets/images/png/servicenow-logo.png";
import shopify from "../assets/images/png/shopify-logo.png";

const brands = [
    clickUp,
    dropboxBlue,
    elastic,
    github,
    freshboocks,
    helpScout,
    hubSpot,
    intuit,
    google,
    paychex,
    salesforce,
    sap,
    twilioSegment,
    servicenow,
    shopify,
];

export default function Graduated() {
    return (
        <section className="py-24">
            <h3 className="text-center py-16">Our graduates have worked in</h3>
            <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-y-10 gap-x-10 lg:gap-x-24 items-center">
                {brands.map((brand, index) => (
                    <img key={index} src={brand} alt="brand" />
                ))}
            </div>
        </section>
    );
}
