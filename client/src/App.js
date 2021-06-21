import { useState } from 'react';
import Form from './components/Form';
import View from './components/View';
import { Paper, Grid } from '@material-ui/core';
import useStyles from './Style';

function App() {
  const [balance, setBalance] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  const getBalance = async (e) => {
    e.preventDefault();
    let addr = e.target.getAddr.value;

    try {
      setIsLoading(true);

      const res = await fetch(`/balance/addr/?hex=${addr}`);
      const data = await res.json();

      setBalance(data);
      setIsLoading(false);
    } catch (err) {
      return console.error(err);
    }
  }

  return (
    <Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justify="center">
      <Paper className={classes.paper} variant="outlined">
        <Grid className={classes.innerGrid}
    			container
    			spacing={0}
    			direction="column"
    			alignItems="center"
    			justify="center">
          <Form onSubmit={getBalance} />
          <View isLoading={isLoading} balance={balance} />
        </Grid>
      </Paper>
    </Grid>
  )
}

export default App;
