import styled from 'styled-components';

export const HeroName = styled.h2`


        
       
            grid-column: 1/3;
            padding: 0.5rem 0;
color: black;
 
    
        
        @media screen and (min-width:380px) {
           
                grid-column: 1;
                grid-row: 1;
                padding: 0;
        }
        
        @media screen and (min-width:680px) {

                align-self: flex-start;
                justify-self: center;
                grid-column: 1/2;
                grid-row: 1;
         
        }

`;