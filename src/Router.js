import React from 'react';
import { HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './About';
import Header from './AppBar';
const AppRouter = () => (
<HashRouter>
<div>
<Header />
<Switch>
<Route path="/" component={HomePage} exact={true} />
<Route path="/about" component={AboutPage} />
</Switch>
</div>
</HashRouter>
);
export default AppRouter;