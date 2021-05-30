import styled from 'styled-components';

export const HeroItem = styled.div`

        display: grid;
        border-radius: 5px;
        border: 1px solid rgb(255, 255, 255);
        grid-template-columns: 2fr 2fr;
        column-gap: 0;
        justify-items: center;
        padding: 0.5em;
        background: rgb(211, 211, 195);
        margin: 1rem 0;
        min-width: 180px;

        @media screen and (min-width:680px) {
             {
                grid-template-columns: 2fr 5fr 2fr;
            }
        }


`;