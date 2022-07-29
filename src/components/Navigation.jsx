import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import logo from "../assets/images/svg/logo.svg";
import classes from "../functions/classes";
import { useState, useEffect } from "react";

function isScreenWidthLg() {
    const lgSize = 1024;
    return window.innerWidth >= lgSize;
}

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isViewLg, setIsViewLg] = useState(isScreenWidthLg);
    useEffect(() => {
        function checkIsScreenLg() {
            setIsViewLg(isScreenWidthLg);
        }
        window.addEventListener("resize", checkIsScreenLg);
        return () => {
            window.removeEventListener("resize", checkIsScreenLg);
        };
    }, []);

    useEffect(() => {
        let { body } = document;
        if (isMenuOpen) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "";
        }
    }, [isMenuOpen]);

    return (
        <nav className="py-4 lg:py-8 w-full">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="w-[130px] md:w-[180px]">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="lg:hidden">
                        <BurgerMenu
                            isOpen={isMenuOpen}
                            toggleMenu={() => setIsMenuOpen((prev) => !prev)}
                        />
                    </div>
                    <div
                        style={{
                            transform:
                                !isViewLg && !isMenuOpen
                                    ? "translateX(200px)"
                                    : "translateX(0)",
                        }}
                        className="flex fixed z-10 lg:z-auto bg-white lg:relative top-0 right-0 lg:top-[unset] lg:right-[unset] overflow-y-auto transition-all w-[200px] lg:w-auto h-screen lg:h-auto pt-[80px] lg:p-[unset]  shadow-lg lg:shadow-none gap-10 lg:items-center flex-col lg:flex-row"
                    >
                        <ul className="flex lg:gap-8 flex-col lg:flex-row">
                            <LinkItem href="/">Home</LinkItem>
                            <LinkItem href="/">Bootcamp</LinkItem>
                            <LinkItem href="/">Events</LinkItem>
                            <LinkItem href="/">Article</LinkItem>
                            <LinkItem href="/">Contact Us</LinkItem>
                        </ul>
                        <div className="p-4 lg:p-0">
                            <Button type="outline">Contact Us</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

function BurgerMenu({ isOpen, toggleMenu }) {
    const _classes = classes([
        { default: "burger-menu cursor-pointer z-20" },
        {
            condition: isOpen,
            classes: "open",
        },
    ]);
    return (
        <div className={_classes} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

function LinkItem({ children, props }) {
    return (
        <li className="inline-block">
            <a
                className="cursor-pointer px-4 py-3 lg:p-[unset] transition-all hover:font-[500] active:font-bold hover:underline active:underline inline-block"
                {...props}
            >
                {children}
            </a>
        </li>
    );
}
