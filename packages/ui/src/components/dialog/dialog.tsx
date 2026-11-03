'use client';

import * as React from 'react';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { cn } from '../../lib/utils';

export const Dialog = BaseDialog.Root;
export const DialogTrigger = BaseDialog.Trigger;
export const DialogPortal = BaseDialog.Portal;
export const DialogClose = BaseDialog.Close;

export interface DialogBackdropProps extends React.ComponentProps<typeof BaseDialog.Backdrop> {
  ref?: React.Ref<HTMLDivElement>;
}

export function DialogBackdrop({ ref, className, ...props }: DialogBackdropProps) {
  return (
    <BaseDialog.Backdrop
      ref={ref}
      className={cn('ui-dialog-backdrop', className)}
      {...props}
    />
  );
}

export interface DialogPopupProps extends React.ComponentProps<typeof BaseDialog.Popup> {
  ref?: React.Ref<HTMLDivElement>;
}

export function DialogPopup({ ref, className, ...props }: DialogPopupProps) {
  return (
    <BaseDialog.Popup
      ref={ref}
      className={cn('ui-dialog-content', className)}
      {...props}
    />
  );
}

export interface DialogContentProps extends React.ComponentProps<typeof BaseDialog.Popup> {
  ref?: React.Ref<HTMLDivElement>;
  showCloseButton?: boolean;
}

/**
 * Convenient Compound Dialog Content (wraps Portal + Backdrop + Popup + Close button)
 */
export function DialogContent({
  ref,
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogContentProps) {
  return (
    <BaseDialog.Portal>
      <DialogBackdrop />
      <BaseDialog.Popup
        ref={ref}
        className={cn('ui-dialog-content', className)}
        {...props}
      >
        {children}
        {showCloseButton && (
          <BaseDialog.Close
            className="ui-dialog-close-btn"
            aria-label="Close dialog"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </BaseDialog.Close>
        )}
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  );
}

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export function DialogHeader({ ref, className, ...props }: DialogHeaderProps) {
  return <div ref={ref} className={cn('ui-dialog-header', className)} {...props} />;
}

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export function DialogFooter({ ref, className, ...props }: DialogFooterProps) {
  return <div ref={ref} className={cn('ui-dialog-footer', className)} {...props} />;
}

export interface DialogTitleProps extends React.ComponentProps<typeof BaseDialog.Title> {
  ref?: React.Ref<HTMLHeadingElement>;
}

export function DialogTitle({ ref, className, ...props }: DialogTitleProps) {
  return (
    <BaseDialog.Title
      ref={ref}
      className={cn('ui-dialog-title', className)}
      {...props}
    />
  );
}

export interface DialogDescriptionProps extends React.ComponentProps<typeof BaseDialog.Description> {
  ref?: React.Ref<HTMLParagraphElement>;
}

export function DialogDescription({ ref, className, ...props }: DialogDescriptionProps) {
  return (
    <BaseDialog.Description
      ref={ref}
      className={cn('ui-dialog-description', className)}
      {...props}
    />
  );
}
