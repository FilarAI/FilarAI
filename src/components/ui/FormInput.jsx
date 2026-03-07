export const FormInput = ({ id, label, type = 'text', placeholder, required = false }) => {
    const inputBaseStyle = "w-full bg-white dark:bg-dark-bg border-2 border-gray-border dark:border-white/10 rounded px-4 py-3 font-body text-text-primary dark:text-white transition-all duration-300 focus:outline-none focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10";

    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={id} className="font-body text-sm font-medium text-text-primary dark:text-white">
                {label} {required && <span className="text-accent-500">*</span>}
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
