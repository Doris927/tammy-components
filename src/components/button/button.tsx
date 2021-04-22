import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm',
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
}

interface BaseButtonProps {
    /** クラス名 */
    className?: string
    /** クリック可能かどうか */
    disabled?: boolean
    /** サイズ */
    size?: ButtonSize
    /** タイプ */
    btnType?: ButtonType
    /** 内容 */
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
