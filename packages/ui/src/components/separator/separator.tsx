import * as React from 'react';
import { cn } from '../../lib/utils';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

/**
 * Accessible Semantic Separator (Server Component)
 */
export function Separator({
  ref,
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <div
      ref={ref}
      role={decorative ? 'none' : 'separator'}
      aria-orientation={decorative ? undefined : orientation}
      data-orientation={orientation}
      className={cn(
        'ui-separator',
        orientation === 'vertical' ? 'ui-separator--vertical' : 'ui-separator--horizontal',
        className
      )}
      {...props}
    />
  );
}
