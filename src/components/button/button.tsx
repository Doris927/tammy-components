import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm',
    Default = 'default',
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
}

interface BaseButtonProps {
    className?: string
    disabled?: boolean
    size?: ButtonSize
    btnType?: ButtonType
    children?: React.ReactNode
}

export type ButtonProps = BaseButtonProps &
    React.ButtonHTMLAttributes<HTMLElement>

const Button: React.FC<ButtonProps> = props => {
    const { btnType, className, disabled, size, children, ...restProps } = props

    // btn, btn-lg, btn-sm, btn-primary,
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: disabled,
    })

    return (
        <button className={classes} disabled={disabled} {...restProps}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default,
}

export default Button
