import styled from 'styled-components';

export const Powerstats = styled.div`
   
        
  
        
     
            grid-column: 1/3;
            justify-self: center;
            margin: 0.5rem 0;
    
        
     
        @media screen and (min-width:300px) {
         
                display: grid;
                column-gap: 16px;
                grid-template-columns: 1fr 1fr;
           
        }
        
        @media screen and (min-width:380px) {
           
                display: grid;
                column-gap: 16px;
                grid-template-columns: 1fr;
                grid-column: 2;
            
        }
        
        @media screen and (min-width:680px) {
           
                display: grid;
                column-gap: 16px;
                grid-template-columns: 1fr 1fr;
                align-self: flex-start;
            
        }
`;