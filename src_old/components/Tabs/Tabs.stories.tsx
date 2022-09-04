import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Tabs, TabsItem } from './'

storiesOf('Tabs', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Tabs>
            <TabsItem name="Ale ma kota i kto ma ale">
                Ale Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                blanditiis dignissimos aliquam laborum vel iste libero, nulla impedit
                accusantium eius est odit quaerat consequatur molestiae qui tempore id
                aspernatur repellat?
            </TabsItem>
            <TabsItem name="Ma">
                Ma Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                blanditiis dignissimos aliquam laborum vel iste libero, nulla impedit
                accusantium eius est odit quaerat consequatur molestiae qui tempore id
                aspernatur repellat?
            </TabsItem>
            <TabsItem name="Kota" isActive>
                Kota Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                blanditiis dignissimos aliquam laborum vel iste libero, nulla impedit
                accusantium eius est odit quaerat consequatur molestiae qui tempore id
                aspernatur repellat?
            </TabsItem>
        </Tabs>
    ))
