import testimonialImg from "../assets/images/png/testimonial-img.png";
import rightArrow from "../assets/images/svg/right-arrow.svg";

export default function Testimonial() {
    return (
        <section className="my-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[10%]">
            <div className="w-full">
                <img
                    src={testimonialImg}
                    loading="lazy"
                    alt="A men in a coffee using his phone and laptop"
                />
            </div>
            <div className="flex flex-col gap-8 lg:gap-12 justify-center">
                <h2>What did they say</h2>
                <p>
                    Higher education in the era of the industrial revolution 4.0
                    requires breakthrough learning using digital platforms that
                    answer the challenges of millennial students to study
                    anywhere, anytime and with leading-edge ICT technology. From
                    student recruitment to teaching and learning administration
                    processes,
                </p>
                <hr className="bg-gray-500 h-[2px] " />
                <div className="flex justify-between">
                    <div>
                        <h4 className="mb-1">Briana Patton</h4>
                        <span className="inline-block text-[#80848E]">
                            Designer at <span translate="no">Salesforce</span>
                        </span>
                    </div>
                    <img className="w-12" src={rightArrow} alt="right arrow" />
                </div>
            </div>
        </section>
    );
}
