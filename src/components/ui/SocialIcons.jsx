export const SocialIcons = ({ className = '', size = "24" }) => {
  const iconBaseClass = "text-text-primary dark:text-white hover:text-accent-500 hover:scale-110 transition-all duration-300 cursor-pointer z-10 flex items-center justify-center";
  const sizeClass = size === "32" ? "w-8 h-8 text-[24px]" : "w-6 h-6 text-[18px]";
  
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a href="tel:+48534458418" className={iconBaseClass} aria-label="Phone">
        <span className={sizeClass}>📞</span>
      </a>
      <a href="https://www.instagram.com/kacperfilar_/" target="_blank" rel="noopener noreferrer" className={iconBaseClass} aria-label="Instagram">
        <span className={sizeClass}>📷</span>
      </a>
      <a href="https://wa.me/48534458418" target="_blank" rel="noopener noreferrer" className={iconBaseClass} aria-label="WhatsApp">
        <span className={sizeClass}>💬</span>
      </a>
      <a href="mailto:kacperfilarkontakt@gmail.com" className={iconBaseClass} aria-label="Email">
        <span className={sizeClass}>✉️</span>
      </a>
    </div>
  );
};
