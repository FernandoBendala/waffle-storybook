import type { Meta, StoryObj } from '@storybook/react'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Button from './button'

// Default metadata of the story
// https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        label: {
            description: 'Overwritten label',
        },
        type: {
            control: 'radio',
            description: 'Select the type (primary or secondary)',
            options: ['primary', 'secondary'],
        },
        textColor: {
            control: 'color',
            description: 'Change color of the button',
            defaultValue: 'color'
        },
        size: {
            control: 'select',
            description: 'Select the size (small, medium or large)',
            options: ['small', 'medium', 'large']
        },
        onClick: {
            description: 'add any function'
        },
    },
} satisfies Meta<typeof Button>
export default meta

// The story type for the component
// https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof Button>;

// Options
export const Primary: Story = {
    args: {
        label: 'Primary',
        size: 'large',
        type: 'primary',
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://64f6e1f6b0c995507571affe-veucxoosjt.chromatic.com/iframe.html?designEmbed=true&singleStory=true&id=components-button--primary'
        }
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const primaryButton = canvas.getByRole('button', { name: /Primary/i })

        await expect(primaryButton.innerText).toBe('Primary')
        await expect(primaryButton).toHaveStyle('background-color: #1ea7fd')
    }
}

export const Secondary: Story = {
    args: {
        ...Primary.args,
        type: 'secondary',
        label: 'Secondary',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const secondaryButton = canvas.getByRole('button', { name: /Secondary/i })


        await expect(secondaryButton.innerText).toBe('Secondary')
        await expect(secondaryButton).toHaveStyle('background-color: #fff')
        await expect(secondaryButton).toHaveStyle('box-shadow: #00000026 0 0 0 1px inset')
    }
}


