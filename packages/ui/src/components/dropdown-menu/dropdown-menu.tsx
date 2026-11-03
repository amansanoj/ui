'use client';

import * as React from 'react';
import { Menu as BaseMenu } from '@base-ui/react/menu';
import { cn } from '../../lib/utils';

export const DropdownMenu = BaseMenu.Root;
export const DropdownMenuTrigger = BaseMenu.Trigger;
export const DropdownMenuPortal = BaseMenu.Portal;
export const DropdownMenuGroup = BaseMenu.Group;

export interface DropdownMenuPositionerProps
  extends React.ComponentProps<typeof BaseMenu.Positioner> {
  ref?: React.Ref<HTMLDivElement>;
}

export function DropdownMenuPositioner({
  ref,
  className,
  sideOffset = 6,
  ...props
}: DropdownMenuPositionerProps) {
  return (
    <BaseMenu.Positioner
      ref={ref}
      sideOffset={sideOffset}
      className={cn('ui-menu-positioner', className)}
      {...props}
    />
  );
}

export interface DropdownMenuPopupProps
  extends React.ComponentProps<typeof BaseMenu.Popup> {
  ref?: React.Ref<HTMLDivElement>;
}

export function DropdownMenuPopup({ ref, className, ...props }: DropdownMenuPopupProps) {
  return (
    <BaseMenu.Popup
      ref={ref}
      className={cn('ui-menu-content', className)}
      {...props}
    />
  );
}

export interface DropdownMenuContentProps
  extends React.ComponentProps<typeof BaseMenu.Popup> {
  ref?: React.Ref<HTMLDivElement>;
  sideOffset?: number;
}

/**
 * Convenient Compound DropdownMenu Content
 * Automatically packages Portal + Positioner + Popup
 */
export function DropdownMenuContent({
  ref,
  className,
  sideOffset = 6,
  children,
  ...props
}: DropdownMenuContentProps) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner
        sideOffset={sideOffset}
        className="ui-menu-positioner"
      >
        <BaseMenu.Popup
          ref={ref}
          className={cn('ui-menu-content', className)}
          {...props}
        >
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

export interface DropdownMenuItemProps
  extends React.ComponentProps<typeof BaseMenu.Item> {
  ref?: React.Ref<HTMLDivElement>;
  destructive?: boolean;
}

export function DropdownMenuItem({
  ref,
  className,
  destructive = false,
  ...props
}: DropdownMenuItemProps) {
  return (
    <BaseMenu.Item
      ref={ref}
      className={cn(
        'ui-menu-item',
        destructive && 'ui-menu-item--destructive',
        className
      )}
      {...props}
    />
  );
}

export interface DropdownMenuSeparatorProps
  extends React.ComponentProps<typeof BaseMenu.Separator> {
  ref?: React.Ref<HTMLDivElement>;
}

export function DropdownMenuSeparator({
  ref,
  className,
  ...props
}: DropdownMenuSeparatorProps) {
  return (
    <BaseMenu.Separator
      ref={ref}
      className={cn('ui-menu-separator', className)}
      {...props}
    />
  );
}

export interface DropdownMenuLabelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  inset?: boolean;
}

/**
 * Presentational Section Label (safe to use anywhere inside DropdownMenuContent)
 */
export function DropdownMenuLabel({
  ref,
  className,
  ...props
}: DropdownMenuLabelProps) {
  return (
    <div
      ref={ref}
      role="presentation"
      className={cn('ui-menu-label', className)}
      {...props}
    />
  );
}

/**
 * Accessible ARIA Group Label (use strictly inside <DropdownMenuGroup>)
 */
export const DropdownMenuGroupLabel = BaseMenu.GroupLabel;
