import { useState } from "react";
import Button from "../components/Button";
import classes from "../functions/classes";

const courseData = [];

function genCourse() {
    return {
        date: "1 - 28 July 2022",
        title,
        desc,
        img,
        price: {
            original: 500,
            current: 380,
        },
        enrolledUsers: 120,
    };
}

let courses = [
    "All Program",
    "UI/UX Design",
    "Product Management",
    "Mobile Development",
    "Web Development",
];

export default function Course() {
    const [selectedTab, setSelectedTab] = useState(courses[0]);
    return (
        <section className="py-24">
            <div className="flex items-center justify-between mb-16 gap-4 flex-wrap">
                <h2 className="m-0">Discover Course & Bootcamp</h2>
                <Button type="outline">Show All</Button>
            </div>
            <div className="flex gap-4 no-wrap overflow-x-auto relative">
                {courses.map((item) => {
                    return (
                        <TabButton
                            value={item}
                            isActive={item === selectedTab}
                            onClick={() => setSelectedTab(item)}
                        />
                    );
                })}
            </div>
        </section>
    );
}

function TabButton({ value, isActive, onClick }) {
    const _classes = classes([
        {
            default:
                "inline-block min-w-max cursor-pointer mb-2 px-5 py-3 rounded-[30px] border border-[#230F0F]/20 hover:border-primary",
        },
        {
            condition: isActive,
            classes: " text-white font-semibold  border-primary bg-primary",
        },
    ]);
    return (
        <div key={value} className={_classes} onClick={onClick}>
            {value}
        </div>
    );
}
