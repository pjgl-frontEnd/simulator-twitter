import React from 'react';
import twitterIcon from '../../../common/assets/images/twitterIcon.png';

import Heading from './styled'

const Header = ({title}) => {
  return(
    <Heading>
      <h2>{title}</h2>
      <img src={twitterIcon} alt="Tweets" />
    </Heading>

  )
};

export default Header;
