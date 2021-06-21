import React, { Fragment } from 'react'
import { Typography, CircularProgress } from '@material-ui/core';

const View = ({ balance, isLoading }) => {
  return (
    <Fragment>
      {
        !isLoading ?
        (balance && <Typography component="p">{balance.ether}</Typography>) :
        <CircularProgress />
      }
    </Fragment>
  )
}

export default View;
