import { addParameters, configure } from '@storybook/react'
import { theme } from './theme'

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/)
function loadStories() {
    req.keys().forEach(filename => req(filename))
}

addParameters({
    viewport: { defaultViewport: 'nexus6p' },
    options: {
        theme,
        name: 'Re|word',
        addonPanelInRight: true,
    },
})

configure(loadStories, module)
