export const Card = ({ variant = 'standard', children, className = '' }) => {
    const baseStyle = "rounded-lg p-6 transition-all duration-300 ease-out";

    const variants = {
        standard: "bg-[#FFFFFF] border border-[#E2E8F0] shadow-md hover:shadow-xl hover:-translate-y-1",
        accent: "bg-[#F1F5F9] border-2 border-[#06B6D4] shadow-none"
    };

    return (
        <div className={`${baseStyle} ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
};
