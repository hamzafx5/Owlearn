import { useState } from "react";
import { MdSettings, MdOutlineClear } from "react-icons/md";

export default function FloatingWidget() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            style={{
                width: is(isOpen, 200, 60),
                height: is(isOpen, 180, 45),
                backdropFilter: is(isOpen, "14px", "0"),
            }}
            className="fixed z-50 left-16 bottom-16  rounded-xl bg-gray-200 transition-all duration-300 ease-[cubic-bezier(1,.6,.2,1)]"
        >
            {!isOpen && (
                <div
                    onClick={() => setIsOpen(true)}
                    className="transition-all px-4 py-2 clickable"
                >
                    <MdSettings size="28px" />
                </div>
            )}
            {isOpen && (
                <div className="transition-all p-2">
                    <header>
                        <div
                            onClick={() => setIsOpen(false)}
                            className="p-1 rounded-md bg-gray-300 inline-block clickable hover:shadow-sm"
                        >
                            <MdOutlineClear size="24px" />
                        </div>
                    </header>
                    <input
                        class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                        type="text"
                        aria-label="Filter projects"
                        placeholder="Filter projects..."
                    ></input>
                </div>
            )}
        </div>
    );
}

function is(condition, ifTrue, ifFalse) {
    return condition ? ifTrue : ifFalse;
}
