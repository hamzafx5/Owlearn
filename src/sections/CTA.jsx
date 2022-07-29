import Container from "../components/Container";
import ctaImg from "../assets/images/png/cta-img.png";
import Button from "../components/Button";

export default function CTA() {
    return (
        <section className="mt-24 py-[85px] lg:py-0 lg:pt-1 w-full bg-primary">
            <Container>
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    <div>
                        <h2 className="text-white">
                            Still Confused About Your Career Choice? Consult
                            With Our Experts
                        </h2>
                        <Button type="white">Contact Us</Button>
                    </div>
                    <div className="hidden aspect-[5/2] lg:block">
                        <img
                            src={ctaImg}
                            alt="w-full successful black girl using laptop and smiling"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
