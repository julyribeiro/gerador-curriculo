import React from 'react';

// Define a interface para as props do seu componente Button
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// Use React.forwardRef para permitir que o componente receba uma ref,
// o que é uma boa prática para componentes de UI reutilizáveis.
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        // Defina as classes CSS para o estilo padrão do botão
        // Você pode usar Tailwind CSS para isso.
        className={`inline-flex items-center justify-center 
          rounded-md text-sm font-medium 
          transition-colors 
          focus-visible:outline-none focus-visible:ring-2 
          focus-visible:ring-ring focus-visible:ring-offset-2 
          disabled:opacity-50 disabled:pointer-events-none 
          bg-primary text-primary-foreground hover:bg-primary/90 
          h-10 py-2 px-4 ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";