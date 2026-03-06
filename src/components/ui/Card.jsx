export const Card = ({ variant = 'standard', children, className = '' }) => {
    const variants = {
        standard: "card-default",
        accent: "card-accent"
    };

    return (
        <div className={`${variants[variant]} ${className}`}>
            {children}
        </div>
    );
};
