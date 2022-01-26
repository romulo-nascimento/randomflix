import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode
    outline?: boolean
    onClick?: () => void
    className?: string,
    href?: string,
    target?: HTMLAttributeAnchorTarget 
}