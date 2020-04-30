import React, {useState} from 'react';
import {Card, CardContent} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment'

import Tweeted from './styled'

const Tweet = (props) => {
const {tweet: { name, tweet, time}, index, deleteTweet} = props;

  return(
    <Tweeted>
      <Card>
        <CardContent>
          <div className="bodyTweet">
            <div>
              <h5>{name}</h5>
              <DeleteIcon onClick={ () => deleteTweet(index) }/>
            </div>
            <div>
              <p>{tweet}</p>
              <div>
                <small> {moment().format('MMMM Do YYYY, h:mm:ss a')}</small>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Tweeted>
  );
};

export default Tweet;
