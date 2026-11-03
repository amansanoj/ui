import * as React from 'react';
import { cn } from '../../lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: React.Ref<HTMLTextAreaElement>;
}

export function Textarea({ ref, className, rows = 3, ...props }: TextareaProps) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn('ui-textarea', className)}
      {...props}
    />
  );
}
