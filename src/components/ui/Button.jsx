"use client";

export const Button = ({
    variant = 'primary',
    children,
    href,
    onClick,
    className = '',
    target,
    rel
}) => {
    const baseStyle = "inline-flex justify-center items-center px-6 py-3 rounded-lg font-body font-semibold transition-all duration-300 ease-out active:scale-[0.98]";

    const variants = {
        primary: "bg-[#06B6D4] text-[#FFFFFF] hover:scale-[1.02] shadow-md hover:shadow-xl",
        secondary: "bg-[#F1F5F9] text-[#0F1B3C] border border-[#F1F5F9] hover:border-[#64748B] hover:scale-[1.02] shadow-sm hover:shadow-md",
        ghost: "bg-transparent text-[#06B6D4] border-2 border-[#06B6D4] hover:bg-[#F1F5F9] hover:scale-[1.02]"
    };

    const combinedClasses = `${baseStyle} ${variants[variant]} ${className}`;

    if (href) {
        return <a href={href} className={combinedClasses} target={target} rel={rel}>{children}</a>;
    }

    return (
        <button onClick={onClick} className={combinedClasses}>
            {children}
        </button>
    );
};
