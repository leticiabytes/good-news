import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  modal: {
    minWidth: 600,
    color: '#005288',
  },
  iconButtonClose: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: '#005288',
  },
}));
