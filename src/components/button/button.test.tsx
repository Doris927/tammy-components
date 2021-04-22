import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from './Button'

const defaultProps = {
    onClick: jest.fn(),
}

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'klass',
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn(),
}

describe('test button component', () => {
    it('should render the correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>Nice</Button>)
        const element = wrapper.getByText('Nice') as HTMLButtonElement
        // Button in document
        expect(element).toBeInTheDocument()
        // The type is BUTTON
        expect(element.tagName).toEqual('BUTTON')
        // have the correct classes
        expect(element).toHaveClass('btn btn-default')
        // disabled is false
        expect(element.disabled).toBeFalsy()
        // onClick event
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })

    it('should render the correct component based on different props', () => {
        const wrapper = render(<Button {...testProps}>Nice</Button>)
        const element = wrapper.getByText('Nice')
        // Button in document
        expect(element).toBeInTheDocument()
        // have the correct classes
        expect(element).toHaveClass('btn-primary btn-lg klass')
    })

    it('should render disabled button when disabled set to true', () => {
        const wrapper = render(<Button {...disabledProps}>Nice</Button>)
        const element = wrapper.getByText('Nice') as HTMLButtonElement
        // Button in document
        expect(element).toBeInTheDocument()
        // disabled is true
        expect(element.disabled).toBeTruthy()
        // click event
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})
