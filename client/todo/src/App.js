import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import history from './services/history';
import MainPanel from './components/MainPanel';
import Register from './components/Register';
import Header from './components/Header';
import Login from './components/Login';
import ToDoPanel from './components/ToDoPanel';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/myStyles.css';
import './styles/main.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
            <div className="app overflow-hidden bgc262626 hv-100">
              <Header/>
               
                {/* Main */}
                <div  className="container-fluid p-0">

                            {/* Routing */}
                            <Route   exact path="/" component={MainPanel} />
                            <Route   exact path="/logowanie" component={Login} />
                            <Route   exact path="/rejestracja" component={Register} />
                            <Route   exact path="/todo" component={ToDoPanel} />

                            {/* ------------------------------------------------- */}

                </div>
            </div>
        </Router>

      </div>
    );
  }
}

export default App;
