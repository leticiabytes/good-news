import React from 'react';
import { Link } from 'react-router-dom';

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../hooks/auth';
import ButtonNavigation from '../components/ButtonNavigation';
import { useStyles, Container } from './styles';

import Logo from '../assets/images/Logo.svg';
import { nav } from './nav.js';

const Theme: React.FC = ({ children }) => {
  const { signOut } = useAuth();
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  const drawer = (
    <div>
      <div className={classes.header}>
        <img src={Logo} alt="Good News" className={classes.logo} />
        <ButtonNavigation
          url="/create"
          width="180px"
          height="40px"
          color="#005288"
        >
          PUBLICAR
        </ButtonNavigation>
      </div>
      {/* <div className={classes.toolbar} /> */}
      <List>
        {nav.map((item, index) => (
          <Link
            to={item.href}
            key={item.title}
            style={{ textDecoration: 'none', color: '#6C6C6C' }}
          >
            <ListItem
              button
              selected={selectedIndex === index}
              onClick={event => handleListItemClick(event, index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Container>
      <nav className={classes.drawer}>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
          <ListItem button className={classes.signOut} onClick={signOut}>
            <ListItemIcon>
              <FiLogOut />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItem>
        </Drawer>
      </nav>
      <main className={classes.content}>{children}</main>
    </Container>
  );
};

export default Theme;
