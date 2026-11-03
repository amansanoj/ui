import * as React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
}

export function Input({ ref, className, type = 'text', ...props }: InputProps) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn('ui-input', className)}
      {...props}
    />
  );
}
