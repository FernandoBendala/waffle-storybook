import { addons, types } from '@storybook/manager-api'
import waffleTheme from './waffle-theme'

addons.setConfig({
    theme: waffleTheme,
    panelPosition: 'bottom',
})
