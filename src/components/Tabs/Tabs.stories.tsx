import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Tabs, TabsItem } from './'

storiesOf('Tabs', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Tabs>
            <TabsItem name="Ale">Ale</TabsItem>
            <TabsItem name="Ma">Ma</TabsItem>
            <TabsItem name="Kota" isActive>
                Kota
            </TabsItem>
        </Tabs>
    ))
