export const SocialIcons = ({ className = '', size = "24" }) => {
    const iconBaseClass = "text-[#0F1B3C] hover:text-[#06B6D4] hover:scale-110 transition-all duration-300 cursor-pointer z-10 block";
    const sizeClass = size === "32" ? "w-8 h-8" : "w-6 h-6";

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <a href="tel:+48534458418" className={iconBaseClass} aria-label="Phone">
                <div className={`bg-[#0F1B3C] ${sizeClass} opacity-20 hover:opacity-100 group-hover:bg-[#06B6D4] rounded`} />
            </a>
            <a href="https://www.instagram.com/kacperfilar_/" target="_blank" rel="noopener noreferrer" className={iconBaseClass} aria-label="Instagram">
                <div className={`bg-[#0F1B3C] ${sizeClass} opacity-20 hover:opacity-100 group-hover:bg-[#06B6D4] rounded`} />
            </a>
            <a href="https://wa.me/48534458418" target="_blank" rel="noopener noreferrer" className={iconBaseClass} aria-label="WhatsApp">
                <div className={`bg-[#0F1B3C] ${sizeClass} opacity-20 hover:opacity-100 group-hover:bg-[#06B6D4] rounded`} />
            </a>
            <a href="mailto:kacperfilarkontakt@gmail.com" className={iconBaseClass} aria-label="Email">
                <div className={`bg-[#0F1B3C] ${sizeClass} opacity-20 hover:opacity-100 group-hover:bg-[#06B6D4] rounded`} />
            </a>
        </div>
    );
};
