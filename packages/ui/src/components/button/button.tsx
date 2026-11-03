import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/utils';

export const buttonVariants = cva('ui-button', {
  variants: {
    variant: {
      default: 'ui-button--default',
      secondary: 'ui-button--secondary',
      destructive: 'ui-button--destructive',
      outline: 'ui-button--outline',
      ghost: 'ui-button--ghost',
      accent: 'ui-button--accent',
      link: 'ui-button--link',
    },
    size: {
      sm: 'ui-button--size-sm',
      md: 'ui-button--size-md',
      lg: 'ui-button--size-lg',
      icon: 'ui-button--size-icon',
      'icon-sm': 'ui-button--size-icon-sm',
      'icon-lg': 'ui-button--size-icon-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>;
  asChild?: boolean;
  render?: React.ReactElement<any>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export function Button({
  ref,
  className,
  variant,
  size,
  asChild = false,
  render,
  leftIcon,
  rightIcon,
  isLoading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;
  const classes = cn(buttonVariants({ variant, size, className }));

  // Composition: asChild via Radix Slot
  if (asChild) {
    return (
      <Slot ref={ref} className={classes} aria-disabled={isDisabled} {...props}>
        {children}
      </Slot>
    );
  }

  // Composition: Base UI native render prop pattern
  if (render) {
    return React.cloneElement(render, {
      ref,
      className: cn(classes, render.props.className),
      'aria-disabled': isDisabled,
      ...props,
      children: (
        <>
          {isLoading && <LoadingSpinner />}
          {!isLoading && leftIcon}
          {render.props.children ?? children}
          {rightIcon}
        </>
      ),
    });
  }

  return (
    <button
      ref={ref}
      type="button"
      className={classes}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isLoading && <LoadingSpinner />}
      {!isLoading && leftIcon && <span className="ui-button__icon-left">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ui-button__icon-right">{rightIcon}</span>}
    </button>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="ui-button__spinner"
      style={{
        width: '1em',
        height: '1em',
        animation: 'spin 1s linear infinite',
        marginRight: '0.5rem',
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        style={{ opacity: 0.25 }}
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        style={{ opacity: 0.75 }}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
