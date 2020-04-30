import React, {useState} from 'react';
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment'
import ModalContainer from "../ModalContainer";
import FormSendTwwet from "../FormSendTweet";
import {TWEETS_STORAGE} from '../../../utils/contants'

import SendTweet from './styled'

const SendTweeted = (props) => {
  const { setToastProps, allTweets } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const OpenModal = () => {
   setIsOpenModal(true);

  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const sendTweet = (event, formValue) => {
    event.preventDefault();

    const {name, tweet} = formValue;
    let allTweetsArray = [];

    if(allTweets){
      allTweetsArray = allTweets ;
    }

    !name || !tweet ?
    (setToastProps({ open: true, text:' Warning: all fields must been completed'}))
    :
     ((formValue.time = moment()),
       (allTweetsArray.push(formValue)),
       (localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray))),
       setToastProps({open: true, text: 'Tweet sended', }),
       setIsOpenModal(false)
      );
    allTweetsArray = [];

  };

  return(
    <SendTweet>
     <Fab aria-label="add" onClick={OpenModal}>
     <AddIcon/>
     </Fab>
      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendTwwet sendTweet={sendTweet} />
      </ModalContainer>
    </SendTweet>
  );
};

export default SendTweeted;
