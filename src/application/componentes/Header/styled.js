import styled from 'styled-components'

const Heading = styled.div `
position: fixed;
top: 0;
left: 50%;
width: 95%;
display: flex;
flex-flow: row-reverse;
justify-content: center;
align-items: center;
margin:1% auto;
padding:10px;
background-color: #f3f8fe;
box-shadow: 2px 1px 5px rgba(101, 119, 134, 0.37);
border-radius: 5px;
transform: translate(-50%, 0%);
z-index: 1;
 h2{
 color:#81898e;
 font-weight: bold;
 }
 img{
  max-width:70px;
 }
`;

export default  Heading;
