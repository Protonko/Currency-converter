import React from 'react';

class Cookie extends React.Component {
  render() {
    return (
      <div className="container" id="cookie_info">
        <div className="site-content">
          <div className="well">
            <h2>This website uses cookies</h2>
            We use cookies to personalise content and ads, to provide social media features and to analyse our traffic.
            We also share information about your use of our site with our social media, advertising and analytics partners
            who may combine it with other information that you’ve provided to them or that they’ve collected from your
            use of their services
            &nbsp;
            <button className="btn btn-primary btn-sm" onClick={this.props.cookieHide}>OK</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Cookie
