import React from "react";
import classes from "../functions/classes";

export default function Button({ children, type = "filled", ...props }) {
    let _classes = classes([
        {
            default:
                "inline-block w-max course-pointer font-semibold rounded-[8px] md:py-[13px] md:px-[38px] py-[9px] px-[25px] hover:opacity-90 hover:shadow-[0_2px_16px_-3px] hover:shadow-primary transition-all duration-300",
        },
        {
            condition: type === "filled",
            classes: "bg-primary text-white ",
        },
        {
            condition: type === "white",
            classes: "bg-white text-primary hover:shadow-white",
        },
        {
            condition: type === "outline",
            classes:
                "bg-transparent text-primary border border-primary md:py-[12px] md:px-[37px] py-[8px] px-[23px]",
        },
    ]);
    return (
        <button className={_classes} {...props}>
            {children}
        </button>
    );
}
