import aboutImg from "../assets/images/png/about.png";
import mapPin from "../assets/images/svg/map-pin.svg";
import Button from "../components/Button";

export default function About() {
    return (
        <section className="my-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[10%]">
            <div className="relative">
                <img
                    className="w-full"
                    src={aboutImg}
                    alt="For humans inside of an office one of them using Computer and the rest of them laughing"
                />
                <h4 className="text-white absolute left-4 lg:left-8 bottom-10 lg:bottom-14">
                    Educational technology
                </h4>
                <span className="text-white absolute left-4 lg:left-8 bottom-6 lg:bottom-10 text-sm flex gap-2 items-center">
                    <img className="w-4" src={mapPin} alt="Map Pin" />
                    Jakarta, Indonesia
                </span>
            </div>
            <div className="flex flex-col gap-8 lg:gap-12 justify-center">
                <h2>
                    <span translate="no">Owlearn</span> helps you Become
                    Experienced
                </h2>
                <p>
                    Owlearn provides e-learning solutions for companies,
                    universities and individual professionals. It allows users
                    to create courses, and provides an integrated learning
                    management system. Its offerings include digital course
                    tools, study materials, IT infrastructure and other
                    operations.
                </p>
                <Button>Become a Member</Button>
            </div>
        </section>
    );
}
