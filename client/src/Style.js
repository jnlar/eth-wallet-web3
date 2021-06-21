import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	paper: {
		margin: 70,
		minWidth: 600,
		'@media (max-width:700px)': {
			minWidth: 350,
		},
		maxWidth: 600,
		minHeight: 200,
		paddingBottom: 25,
	},

  innerGrid: {
    marginTop: 75
  }
}));

export default useStyles;
