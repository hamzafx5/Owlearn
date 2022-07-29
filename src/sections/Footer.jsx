import Container from "../components/Container";
import instagram from "../assets/images/svg/instagram.svg";
import linkedin from "../assets/images/svg/linkedin.svg";
import twitter from "../assets/images/svg/twitter.svg";
import youtube from "../assets/images/svg/youtube.svg";

export default function Footer() {
    return (
        <footer>
            <Container>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16">
                    <div className="md:col-span-2">
                        <h5 className="mb-6">Event & Bootcamp</h5>
                        <div className="flex gap-4 md:gap-6 lg:gap-16">
                            <ul className="flex flex-col gap-3">
                                <LinkItem>Web Development</LinkItem>
                                <LinkItem>Mobile Development</LinkItem>
                                <LinkItem>UI Design</LinkItem>
                                <LinkItem>UI Research</LinkItem>
                                <LinkItem>Presentation</LinkItem>
                            </ul>
                            <ul className="flex flex-col gap-3">
                                <LinkItem>Communication</LinkItem>
                                <LinkItem>Video Production</LinkItem>
                                <LinkItem>Digital Marketing</LinkItem>
                                <LinkItem>Branding</LinkItem>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h5 className="mb-6">About Owlearn</h5>
                        <ul className="flex flex-col gap-3">
                            <LinkItem>Adminission Info</LinkItem>
                            <LinkItem>Article</LinkItem>
                            <LinkItem>Group & Referral Program</LinkItem>
                            <LinkItem>Career</LinkItem>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6">Contact</h4>
                        <div className="flex flex-col gap-3">
                            <LinkItem href="mailto:">
                                <span className="text-[#086BED]">
                                    support@edtech.com
                                </span>
                            </LinkItem>
                            <LinkItem>
                                <span className="text-[#086BED]">
                                    (+62) 85923935983
                                </span>
                            </LinkItem>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            <div className="flex gap-3">
                                <img
                                    className="p-2 cursor-pointer rounded-sm hover:bg-black/10"
                                    src={instagram}
                                    alt="instagram"
                                />
                                <img
                                    className="p-2 cursor-pointer rounded-sm hover:bg-black/10"
                                    src={linkedin}
                                    alt="linkedin"
                                />
                                <img
                                    className="p-2 cursor-pointer rounded-sm hover:bg-black/10"
                                    src={twitter}
                                    alt="twitter"
                                />
                                <img
                                    className="p-2 cursor-pointer rounded-sm hover:bg-black/10"
                                    src={youtube}
                                    alt="youtube"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="w-full bg-[#0A0A0A] h-16 text-white text-sm md:text-base flex items-center justify-center">
                Copyright &copy; {new Date().getFullYear()} Owlearn. All Rights
                Reserved.
            </div>
        </footer>
    );
}

function LinkItem({ href = "#", children }) {
    return (
        <li className="inline-block">
            <a className="text-[#4D4D4D] hover:text-[#086BED]" href={href}>
                {children}
            </a>
        </li>
    );
}
