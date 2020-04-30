import React, {useState, useEffect} from 'react';
import {Container, Snackbar} from "@material-ui/core";
import Header from './componentes/Header'
import SendTweeted from './componentes/SendTweet'
import ListTweet from './componentes/ListTweets'
import ModalContainer from './componentes/SendTweet'
import {TWEETS_STORAGE} from "../utils/contants";

import GlobalStyled from '../styled';
import ModalContainerStyle from "./componentes/ModalContainer/styled";


const App = () => {

  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  });

  const [allTweets, setAllTweets] = useState([]);
  const [reloadTweets, setReloadTweets] = useState(false);


  useEffect( () => {
    const AllTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(AllTweetsStorage);
    setAllTweets(allTweetsArray);
    setReloadTweets(false);
  }, [reloadTweets]);


  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
  };


  return(
    <>
      <GlobalStyled>
        <Container className="tweetsSimulator" maxWidth={false}>
          <Header title="Simulator Tweets"> </Header>
          <SendTweeted setToastProps={setToastProps} allTweets={allTweets}/>
          <ListTweet allTweets={allTweets} deleteTweet={deleteTweet} />
          <ModalContainerStyle>
          </ModalContainerStyle>
          <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={toastProps.open} autoHideDuration={1000} message={<span id="message-id">{toastProps.text} </span>} />
        </Container>
      </GlobalStyled>

    </>
  )
};
export default App;
