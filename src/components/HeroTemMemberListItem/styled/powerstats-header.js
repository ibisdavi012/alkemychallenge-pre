import styled from 'styled-components';

export const PowerstatsHeader = styled.h2`

            text-align: center;
            grid-column: 1/3;
    
        
        @media screen and (min-width:380px) {
            
                grid-column: 2;
                grid-row: 1;
            
        }
        
        @media screen and (min-width:680px) {
            
                align-self: flex-end;
        
        }
`;