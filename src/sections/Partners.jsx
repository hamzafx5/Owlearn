import skillshare from "../assets/images/png/skillshare-logo.png";
import udemy from "../assets/images/png/udemy-logo.png";
import google from "../assets/images/png/google-logo.png";
import coursera from "../assets/images/png/coursera-logo.png";
import idf from "../assets/images/png/idf-logo.png";

export default function Partners() {
    return (
        <section className="mb-16 flex flex-wrap gap-6 items-center">
            <h2 className="h3">
                We Partner With More
                <br /> Than 10+ Companies
            </h2>
            <div className="flex flex-wrap grow gap-2 lg:justify-evenly">
                <img
                    className="h-[50px]"
                    src={skillshare}
                    alt="skillshare logo"
                />
                <img
                    className="h-[50px] fill-neutral-800"
                    src={udemy}
                    alt="udemy logo"
                />
                <img className="h-[50px]" src={google} alt="google logo" />
                <img className="h-[50px]" src={coursera} alt="coursera logo" />
                <img
                    className="h-[50px]"
                    src={idf}
                    alt="Interaction Design Foundation logo"
                />
            </div>
        </section>
    );
}
