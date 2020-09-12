import React from 'react';
import { CONTACTS } from './contactsData';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.renderContacts = this.renderContacts.bind(this);
  }

  renderContacts(elem, index) {
    return (
      <li key={index}>{elem}: {CONTACTS[elem]}</li>
    )
  }

  render() {
    return (
      <div>
        <ul>
          {Object.keys(CONTACTS).map(this.renderContacts)}
        </ul>
      </div>
    );
  }
}

export default About;
