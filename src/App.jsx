import Container from "./components/Container";
import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import Partners from "./sections/Partners";
import About from "./sections/About";
import CTA from "./sections/CTA";
import Graduated from "./sections/Graduated";
import Testimonial from "./sections/Testimonial";
import Footer from "./sections/Footer";
import Course from "./sections/Course";

function App() {
    return (
        <div>
            <Navigation />
            <Container>
                <Hero />
                <Partners />
                <About />
                <Course />
            </Container>
            <CTA />
            <Container>
                <Graduated />
                <Testimonial />
            </Container>
            <Footer />
        </div>
    );
}

export default App;
