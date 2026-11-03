import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

export const badgeVariants = cva('ui-badge', {
  variants: {
    variant: {
      default: 'ui-badge--default',
      secondary: 'ui-badge--secondary',
      accent: 'ui-badge--accent',
      destructive: 'ui-badge--destructive',
      outline: 'ui-badge--outline',
      muted: 'ui-badge--muted',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  ref?: React.Ref<HTMLDivElement>;
}

/**
 * Pure Server Component: Badge
 */
export function Badge({ ref, className, variant, children, ...props }: BadgeProps) {
  return (
    <div ref={ref} className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
}
