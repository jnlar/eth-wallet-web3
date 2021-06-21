import React from 'react'
import { Typography, Button, TextField } from '@material-ui/core';

const Form = (props) => {
  return (
    <Typography component="form" onSubmit={props.onSubmit}>
      <TextField
        type="text"
        name="getAddr"
        helperText="ETH address"
      />
      <Button type="submit">Submit</Button>
    </Typography>
  )
}

export default Form;
