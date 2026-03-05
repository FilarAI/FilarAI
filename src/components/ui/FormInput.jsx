export const FormInput = ({ id, label, type = 'text', placeholder, required = false }) => {
    const inputBaseStyle = "w-full bg-[#FFFFFF] border-2 border-[#E2E8F0] rounded px-4 py-3 font-body text-[#0F1B3C] transition-all duration-300 focus:outline-none focus:border-[#06B6D4] focus:ring-4 focus:ring-[#06B6D4]/10";

    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={id} className="font-body text-[14px] font-medium text-[#0F1B3C]">
                {label} {required && <span className="text-[#06B6D4]">*</span>}
            </label>

            {type === 'textarea' ? (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    required={required}
                    className={`${inputBaseStyle} min-h-[120px] resize-y`}
                />
            ) : (
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    className={`${inputBaseStyle} min-h-[48px]`}
                />
            )}
        </div>
    );
};
