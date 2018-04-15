import React from 'react';
import ReactDom from 'react-dom';
import styles from '../scss/style.scss';
import { HashRouter } from 'react-router-dom';
import { Switch, Route, IndexRoute, NavLink } from 'react-router-dom';
import Teaser from './components/teaser/teaser.jsx';
// import IndexStyles from '../scss/index.scss';

class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><NavLink activeClassName='active' exact to="/">Home</NavLink></li>
            <li><NavLink activeClassName='active'
              to="/eulenundlerchen">Eulen und Lerchen</NavLink></li>
            <li><NavLink activeClassName='active' to="/test">Test</NavLink></li>
            <li><NavLink activeClassName='active' to="/test2">Test</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Teaser} />
          <Route path="/eulenundlerchen" render={() => <h1>Eulen</h1>} />
        </Switch>
      </div>
    )
  }
}

// Fire up the app
ReactDom.render(
  <HashRouter basename="/">
    <Application />
  </HashRouter>, document.getElementById('app-container'));
