import { useState } from "react";
import Button from "../components/Button";
import classes from "../functions/classes";
import img1 from "../assets/images/png/courses/img-1.png";
import img2 from "../assets/images/png/courses/img-2.png";
import img3 from "../assets/images/png/courses/img-3.png";
import img4 from "../assets/images/png/courses/img-4.png";
import img5 from "../assets/images/png/courses/img-5.png";
import img6 from "../assets/images/png/courses/img-6.png";
import Card from "../components/Card";

// function genId()

const courseData = [
    genCourse("Product Management Basic - Course", img1),
    genCourse("Front End Developer - Basic", img2),
    genCourse("Back End Developerr -Basic", img3),
    genCourse("UX Design - Branstroming", img4),
    genCourse("UI Design - Sketch", img5),
    genCourse("Graphic Design - Fundamental Design", img6),
];

function genCourse(title, img) {
    return {
        date: "1 - 28 July 2022",
        title,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.",
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
                            key={item}
                            value={item}
                            isActive={item === selectedTab}
                            onClick={() => setSelectedTab(item)}
                        />
                    );
                })}
            </div>
            <hr className="mt-10 mb-14" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {courseData.map((course) => {
                    return <Card key={course.title} {...course} />;
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
