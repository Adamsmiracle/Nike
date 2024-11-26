import React from "react";

const Button = ({
    label,
    iconURL,
    backgroundColor,
    borderColor,
    textColor,
    fullWidth,
}) => {
    return (
        <button
            className={`flex  justify-center items-center gap-2 py-4 px-7 rounded-full border font-montserrat text-lg leading-none ${
                fullWidth && "w-full"
            }
            ${
                backgroundColor
                    ? `${backgroundColor} ${borderColor} ${textColor}`
                    : "bg-coral-red text-white border-red-400"
            }`}
        >
            {label}
            {iconURL && (
                <img
                    src={iconURL}
                    alt="Arrow right icon"
                    className="ml-2 rounded-full w-5 h-5"
                />
            )}
        </button>
    );
};

export default Button;
