import { addons } from '@storybook/manager-api'
import waffleTheme from './waffle-theme'

addons.setConfig({
    theme: waffleTheme,
    panelPosition: 'bottom',
})