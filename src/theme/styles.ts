import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flex: 1,
      height: '100vh',
      padding: theme.spacing(3),
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
    },
    logo: {
      maxWidth: 180,
      margin: theme.spacing(6),
    },
    signOut: {
      position: 'absolute',
      bottom: 0,
    },
  }),
);

export const Container = styled.div`
  display: flex;
  background: #f7f9fc;
`;
