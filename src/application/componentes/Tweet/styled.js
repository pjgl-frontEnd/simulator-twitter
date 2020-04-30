import styled from 'styled-components'

const Tweeted = styled.div `
  .bodyTweet{
  display:flex;
  flex-flow:row wrap;
  justify-content: space-between;
  align-items: stretch;
   > div{
    width:100%;
    display:flex;
    justify-content: space-between;
    small{font-size: 12px;}
   }
  }
`;

export default Tweeted;
