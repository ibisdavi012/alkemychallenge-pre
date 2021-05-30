import styled from 'styled-components';

export const HeroImage = styled.img`


        
       
            max-width: 120px;
            border-radius: 10px;
            grid-column: 1/3;
        
        
 
    
        
        @media screen and (min-width:380px) {
           
                width: 100px;
                height: 100px;
                border-radius: 50%;
                grid-column: 1;
           
        }
        
        @media screen and (min-width:680px) {
            
                grid-column: 1;
                grid-row: 2;
                align-self: flex-start;
            
        }
`;