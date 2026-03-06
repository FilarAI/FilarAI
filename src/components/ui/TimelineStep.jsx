export const TimelineStep = ({ stepNumber, title, description, isLast = false }) => (
    <div className="relative flex gap-6 md:gap-8 group">
        {/* Line connector */}
        {!isLast && (
            <div className="absolute left-[20px] top-[40px] bottom-[-24px] w-[2px] bg-gray-border md:left-1/2 md:-ml-[1px]" />
        )}

        {/* Step Number Circle */}
        <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-text-primary text-white flex items-center justify-center font-display font-bold text-[18px] border-4 border-white shadow-subtle md:mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent-500">
            {stepNumber}
        </div>

        {/* Content */}
        <div className="flex-1 pb-10 md:w-1/2 md:text-right md:pr-12 md:even:text-left md:even:pl-12">
            <h3 className="heading-serif text-h3 mb-2 text-left md:group-even:text-left md:group-odd:text-right group-hover:text-accent-500 transition-colors duration-300">
                {title}
            </h3>
            <p className="text-secondary text-base text-left md:group-even:text-left md:group-odd:text-right">
                {description}
            </p>
        </div>
    </div>
);
