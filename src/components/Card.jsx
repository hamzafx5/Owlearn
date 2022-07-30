import Button from "../components/Button";

export default function Card({ date, title, desc, img, price, enrolledUsers }) {
    return (
        <div>
            <div className="relative aspect-video flex">
                <img loading="lazy" src={img} alt="Card Image" />
            </div>
            <div className="flex gap-5 flex-col p-4 border border-[#ECEFF4] border-t-0 rounded-[0_0_8px_8px]">
                <div className="text(-[#777795] text-sm">{date}</div>
                <h3 className="m-0">{title}</h3>
                <p>{desc}</p>
                <div className="flex items-center justify-between">
                    <p>
                        <span className="text-primary font-semibold mr-2">
                            ${price.current}
                        </span>
                        <del className="text-[#BAB4B4]">{price.original}</del>
                    </p>
                    <Button type="outline">Show All</Button>
                </div>
            </div>
        </div>
    );
}
