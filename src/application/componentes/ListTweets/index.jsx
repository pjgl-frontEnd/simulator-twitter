import React from 'react';
import Tweet from'../Tweet'
import { Grid } from '@material-ui/core'
import List from './styled'

const ListTweet = (props) => {
  const {allTweets, deleteTweet} = props;

  if(!allTweets || allTweets.length === 0){
    return(
      <List>
        <h2>No hay Tweets</h2>
      </List>
    )
  }
  return(
   <Grid container spacing={3}>
     {allTweets.map( (tweet, index) => (
       <Grid key={index} item xs={4}>
         <Tweet tweet={tweet} index={index} deleteTweet={deleteTweet}  />
       </Grid>
     ))}
   </Grid>
  );
};

export default ListTweet;
