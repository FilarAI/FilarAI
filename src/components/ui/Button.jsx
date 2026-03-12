import Link from 'next/link';

export const Button = ({ 
  variant = 'primary', 
  children, 
  href, 
  onClick, 
  className = '',
  target,
  rel
}) => {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost"
  };

  const combinedClasses = `${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || target === '_blank';
    
    if (isExternal) {
      return (
        <a href={href} className={combinedClasses} target={target} rel={rel}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};
