import classes from "../functions/classes";
export default function Container({ children, className, ...props }) {
    const _classes = classes([
        { default: "container" },
        {
            condition: className,
            classes: className,
        },
    ]);

    return (
        <div className={_classes} {...props}>
            {children}
        </div>
    );
}
