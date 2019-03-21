import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'
import { Nav } from './Nav'
import styled from 'styled-components'

const options = {
    Red: 'red',
    Blue: 'blue',
    Yellow: 'yellow',
    Rainbow: ['red', 'orange', 'etc'],
    None: null,
  };

storiesOf('Nav', module)
    .addDecorator(withKnobs)
    .add('test', () => <div>
        Test1: {text('Word', 'Hello')} <br/>
        Test2: {number('Dupa number', 0)}
        Test4: {select('Color', options, 'red')}
    </div>)
    .add('state test', () => <NavStated />)

export const NavStated = () => {
    const [active, setActive] = useState('home')
    return (
        <NavPosition>
            <Nav active={active} onChange={setActive} />
        </NavPosition>
    )
}
    
    // teraz pytanie :
    // nie działa klik ta sie go zrobić na szybko?
    //  to "klik KURWA" chce zamienić na to żeby zmieniał mi na acita ale // on ma nie zmieniać
    // da sie?
    // czy powinnem to poporstu testować za pomoca tych parametrów po prawej
    // mozesz sobie napisać swój mały komponent ze stanem i go wyrenderować ale nie o to tu chodzi 
    //  to bez sensu chyba troche
    // no to juz będzie w appce
    //  no w apce działa ale ogarniam o co chodzi
    // podoba mi sie to że możesz sobie pisać swój komponent i dotykając reszyty apki
    const NavPosition = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
`



