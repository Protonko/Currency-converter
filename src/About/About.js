import React from 'react';
import './About.css';

class About extends React.Component {
  render() {
  	let contacts = this.props.contacts;
    return (
      <div>
		<ul>	
			{Object.keys(contacts).map(elem => {
			  return <li key={elem}>{elem}: {contacts[elem]}</li>;
			})}
		</ul>
      </div>
    );
  }
}

export default About;
