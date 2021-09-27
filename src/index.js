import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './component/Nav';
import App from './App';
import NotFound from './component/NotFound';
import AboutMe from './component/AboutMe';
import AboutWebsite from './component/AboutWebsite';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Detail from './component/Detail';

const Root = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/exhibition' component={App} />
      <Route exact path='/about-me' component={AboutMe} />
      <Route exact path='/about-this-website' component={AboutWebsite} />
      <Route exact path='/details/:id' component={Detail} />
      <Route exact component={NotFound} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
