import { Card } from './Card';

export const StatCard = ({ value, label, description }) => (
    <Card className="flex flex-col h-full text-center items-center justify-center p-6 bg-[#FFFFFF]">
        <div className="text-[#06B6D4] text-[36px] md:text-[48px] lg:text-[60px] font-heading font-bold mb-2">
            {value}
        </div>
        <h4 className="text-[#0F1B3C] font-heading text-[20px] md:text-[24px] font-semibold mb-2">
            {label}
        </h4>
        <p className="text-[#64748B] font-body text-[16px] leading-[1.6]">
            {description}
        </p>
    </Card>
);
