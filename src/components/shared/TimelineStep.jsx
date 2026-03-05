export const TimelineStep = ({ stepNumber, title, description, isLast = false }) => (
    <div className="relative flex gap-6 md:gap-8 group">
        {/* Line connector */}
        {!isLast && (
            <div className="absolute left-[20px] top-[40px] bottom-[-24px] w-[2px] bg-[#E2E8F0] md:left-1/2 md:-ml-[1px]" />
        )}

        {/* Step Number Circle */}
        <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-[#0F1B3C] text-[#FFFFFF] flex items-center justify-center font-heading font-bold text-[18px] border-4 border-[#FFFFFF] shadow-sm md:mx-auto">
            {stepNumber}
        </div>

        {/* Content */}
        <div className="flex-1 pb-10 md:w-1/2 md:text-right md:pr-12 md:even:text-left md:even:pl-12">
            <h3 className="text-[#0F1B3C] font-heading text-[20px] md:text-[24px] font-bold mb-2 text-left md:group-even:text-left md:group-odd:text-right">
                {title}
            </h3>
            <p className="text-[#64748B] font-body text-[16px] leading-[1.6] text-left md:group-even:text-left md:group-odd:text-right">
                {description}
            </p>
        </div>
    </div>
);
