import * as React from 'react'
import styled from 'styled-components'

type NavProps = {
    active: string
    onChange(page: string): void
}

export const Nav = (prop: NavProps) => {
    return (
        <Container>
                <NavButton isActive={prop.active==='home'} onClick={() => prop.onChange('home')}>Home</NavButton>
                <NavButton isActive={prop.active==='words'} onClick={() => prop.onChange('words')}>Words</NavButton>
                <NavButton isActive={prop.active==='settings'} onClick={() => prop.onChange('settings')}>
                    Settings
                </NavButton>
        </Container>
    )
}
// jest sens używać takich elemntów jak ????????? 
// bo trzeba im zerować np paddingi
// Git, dlaczego nie?
const Container = styled.div`
    background: white;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`

// takie rzczy jak position fixed to sie robi tu czy w app?
// do całego componetu
// Generlanie dobrze jak komponenty nie wychodzą po za swój kontener
// czyli bez marginesów, positionów itd.
// Bo pewnie w app będzie jakiś layout i wtedy wsadziesz sobie nav na dole
// Ale czasami łamie się te zasady, zalezy jak Ci wygodnie
// Np. ja klawiatury nie chciałem robić absolute bo moze przy ustawieniach ja gdzieś indziej wyswietę jako podglad 
// ok czaje
// można stylować takie rzeczy jak <Nav/>?
//  →→→ A co chcesz w tym stylować?
// no NAV w pliku nav.stories.tsx
// zeby ja testować na dole np xD
// No ja zrobiłem sobie diva który mi przeniusł to na 
//  Nie tykam stylów klawiatury, klawiatura ma sowje propsy i tyle
// więc jak chce mieć duza nawigację to robie <Nav isBig />

// no czaje choc do nav stories!


// za dużo nas w jednym miejsc xD

const NavButton = styled.button<{ isActive: boolean }>`
    background: ${props => props.isActive ? 'red' : 'black'};
    display: block;
`
//////////////
// to kawałek TS (nie react i nie styled components) i typów generycznych
// masz np typ Promise ale promise moze zwracać  więć się pisze
// Promise<string> albo Promise<boolean> albo Promise<{ userName: string, isActive: false }> itd.
// Ten typ "generyczny" mozna podać tez przy funkcji jak wykonujesz np. <- loading...
// fetch<{ emalWasSend: boolean }>('api/send-email') <- loading...


// ładniej, ctrl+z się szarpie
// ja jestem pod wrażeniem że to i tak, tak dobrze działa

// nie ogarniam tego TS troche

// to znaczy że obiekt ApiResponse ma parametr emalWasSend który jest boolean?
// type ApiResponse = { emalWasSend: boolean }

// a tego nie rozumiem
// fetch<ApiResponse>('api/send-email')}
// aaa chyba czaje to znaczy że cos zwraca wedlug tego klucza co ApiResponse czy jako tka