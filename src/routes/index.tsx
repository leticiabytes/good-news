import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import LandingPage from '../pages/GoodNewsPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

import Posts from '../pages/Posts';
import ViewPosts from '../pages/Posts/View';
import CreatePosts from '../pages/Posts/Forms/FormAdd';
import EditPost from '../pages/Posts/Forms/FormEdit';

import Users from '../pages/Users';
import Theme from '../theme';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/home" exact component={LandingPage} isPrivate />

    <Route path="/posts/:id" exact component={ViewPosts} />

    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />

    <Theme>
      <Route path="/posts" exact component={Posts} isPrivate />
      <Route path="/posts/view/:id" component={ViewPosts} isPrivate />
      <Route path="/create" component={CreatePosts} isPrivate />
      <Route path="/posts/edit/:id" component={EditPost} isPrivate />

      <Route path="/users" component={Users} isPrivate />
    </Theme>
  </Switch>
);

export default Routes;
