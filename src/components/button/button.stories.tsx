import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import Button, { ButtonSize, ButtonType } from './Button'
import { action } from '@storybook/addon-actions'

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Button',
    component: Button,
}

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = args => (
    <Button {...args} />
)

export const DefaultButton = Template.bind({})
DefaultButton.args = {
    children: 'Default Button',
    onClick: action('clicked'),
}

export const LargeButton = Template.bind({})
LargeButton.args = {
    size: ButtonSize.Large,
    children: 'Large Button',
    onClick: action('clicked'),
}

export const SmallButton = Template.bind({})
SmallButton.args = {
    size: ButtonSize.Small,
    children: 'Small Button',
    onClick: action('clicked'),
}

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
    btnType: ButtonType.Primary,
    children: 'Primary Button',
    onClick: action('clicked'),
}

export const DangerButton = Template.bind({})
DangerButton.args = {
    btnType: ButtonType.Danger,
    children: 'Danger Button',
    onClick: action('clicked'),
}
