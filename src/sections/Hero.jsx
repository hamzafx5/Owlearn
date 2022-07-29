import Button from "../components/Button";
import heroVector from "../assets/images/svg/here-vector.svg";
import user1 from "../assets/images/png/user-1.png";
import user2 from "../assets/images/png/user-2.png";
import user3 from "../assets/images/png/user-3.png";
import rating from "../assets/images/png/4-5-stars.png";
import curvedLine from "../assets/images/svg/curved-line.svg";

export default function Hero() {
    return (
        <section className="py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div className="flex flex-col grow shrink-0 row-start-2 row-end-3 lg:row-start-auto lg:row-end-auto">
                <h1 className="mb-10 lg:mb-16">
                    Learn Any Skills to <br /> advance your <br />
                    <div className="relative inline-block">
                        career path
                        <img
                            className="w-full absolute left-0 -bottom-5"
                            src={curvedLine}
                        />
                    </div>
                </h1>
                <p className="max-w-[50ch]">
                    Want to improve your work skills? You need to study harder
                    with the help of a great mentor to improve your performance
                    at work
                </p>
                <div className="flex gap-4 flex-wrap mt-8 lg:mt-12">
                    <Button>Explore Path</Button>
                    <div className="flex align-center">
                        <div className="flex">
                            <img className="w-12 h-12" src={user1} alt="user" />
                            <img
                                className="w-12 h-12 -translate-x-3"
                                src={user2}
                                alt="user"
                            />
                            <img
                                className="w-12 h-12 -translate-x-5"
                                src={user3}
                                alt="user"
                            />
                        </div>
                        <div className="flex flex-col justify-between py-1">
                            <img
                                className="w-[100px]"
                                src={rating}
                                alt="rating"
                            />
                            <p className="text-sm">(4,5/5 dari 10k Alumni)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex grow shrink-0 items-center justify-center row-start-1 row-end-2 lg:row-start-auto lg:row-end-auto">
                <img src={heroVector} alt="Hero vector" />
            </div>
        </section>
    );
}
