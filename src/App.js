import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Rate from './Components/Rate/Rate';
import About from './Components/About/About';
import Point from './Components/Point/Point';
import Cookie from './Components/Cookie/Cookie';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie : true,
    }
  }

  cookieHide = () => {
    this.setState({cookie : false});
  }
  render() {
    return (
      <Router>
        <div className="site">
          <Header />

          <div className="container content">
            <main className="main">
              <Switch>
                <Route exact path="/" component={Rate} />
                <Route exact path="/point" component={Point} />
                <Route exact path="/about"  component={About}/>
              </Switch>
            </main>
          </div>

          {this.state.cookie && <Cookie cookieHide={this.cookieHide} />}

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
