import React from "react";

const LeftNavMenuItem = ({ text, icon, className, action }) => {
    return (
        <div
            className={
                "text-black text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-[#d3d3d3]/[0.4] " +
                className
            }
            onClick={action}
        >
            <span className="text-xl mr-5">{icon}</span>
            {text}
        </div>
    );
};

export default LeftNavMenuItem;