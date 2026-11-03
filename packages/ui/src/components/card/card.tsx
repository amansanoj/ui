import * as React from 'react';
import { cn } from '../../lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export function Card({ ref, className, ...props }: CardProps) {
  return <div ref={ref} className={cn('ui-card', className)} {...props} />;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export function CardHeader({ ref, className, ...props }: CardHeaderProps) {
  return <div ref={ref} className={cn('ui-card-header', className)} {...props} />;
}

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  ref?: React.Ref<HTMLHeadingElement>;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function CardTitle({ ref, className, as: Tag = 'h3', ...props }: CardTitleProps) {
  return <Tag ref={ref} className={cn('ui-card-title', className)} {...props} />;
}

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  ref?: React.Ref<HTMLParagraphElement>;
}

export function CardDescription({ ref, className, ...props }: CardDescriptionProps) {
  return <p ref={ref} className={cn('ui-card-description', className)} {...props} />;
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export function CardContent({ ref, className, ...props }: CardContentProps) {
  return <div ref={ref} className={cn('ui-card-content', className)} {...props} />;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export function CardFooter({ ref, className, ...props }: CardFooterProps) {
  return <div ref={ref} className={cn('ui-card-footer', className)} {...props} />;
}
