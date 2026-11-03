import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

export const containerVariants = cva('ui-container', {
  variants: {
    size: {
      sm: 'ui-container--sm',
      md: 'ui-container--md',
      lg: 'ui-container--lg',
      xl: 'ui-container--xl',
      '2xl': 'ui-container--2xl',
      full: 'ui-container--full',
    },
  },
  defaultVariants: {
    size: 'xl',
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  ref?: React.Ref<HTMLDivElement>;
  as?: 'div' | 'section' | 'main' | 'article';
}

/**
 * Pure Server Component: Responsive Layout Container
 */
export function Container({
  ref,
  className,
  size,
  as: Tag = 'div',
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      ref={ref}
      className={cn(containerVariants({ size, className }))}
      {...props}
    >
      {children}
    </Tag>
  );
}
