import React, {useState} from 'react';
import {FormControl, FormGroup, TextField, Button} from "@material-ui/core";

import FormSendTweet from './styled'

const FormSendTwwet = (props) => {

  const { sendTweet } = props;
  const [formValue, setFormValue] = useState({
   name: '',
   tweet: '',
 });

  const onFormChange = event => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value

    })
  };
  return(
    <FormSendTweet>
      <h2>Send Tweet</h2>
      <form onSubmit={(event) => sendTweet(event, formValue)} onChange={onFormChange}>
       <FormControl>
         <FormGroup>
           <TextField type="text" name="name" placeholder="User Name" />
         </FormGroup>

         <FormGroup>
           <TextField type="text" name="tweet" placeholder="Say your tweets" rows="6" multiline  />
         </FormGroup>

         <FormGroup>
           <Button type="submit">Send </Button>
         </FormGroup>
       </FormControl>
      </form>
    </FormSendTweet>
  );
};

export default FormSendTwwet;
