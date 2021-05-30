import styled from 'styled-components';

export const UserActions = styled.div`

width: 100%;
            grid-column: 1/3;
            grid-row: 6;
            display: flex;
            flex-direction: column;

            &  .user-action {
            width: 100%;
        }

        @media screen and (min-width:300px) {
            
                flex-direction: row;
                justify-content: space-around;

        }

        @media screen and (min-width:680px) {
                  grid-column: 3;
                grid-row: 1/3;
                flex-direction: column;
                justify-content: center;}
`;
