import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About/About';
import Point from './Point/Point';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie : 'block',
    }
  }

  cookieHide = () => {
    this.setState({cookie : 'none'});
  }
  render() {
    let contacts = this.props.contacts;
    return (
      <div className="site">
      
        <Header />

        <div className="container">
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Rate} />
                <Route exact path="/point" component={Point} />
                <Route exact path="/about"  render={()=><About contacts={contacts}/>}/>
              </Switch>
            </Router>
          </main>
        </div>

        <div className="container" id="cookie_info" style={{display: this.state.cookie}}>
          <div className="site-content">
            <div className="well">
              <h2>This website uses cookies</h2>
              We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. 
              We also share information about your use of our site with our social media, advertising and analytics partners 
              who may combine it with other information that you’ve provided to them or that they’ve collected from your 
              use of their services
              &nbsp;<button className="btn btn-primary btn-sm" onClick={this.cookieHide}>OK</button>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

export default App;
