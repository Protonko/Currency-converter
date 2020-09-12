import React from 'react';
import { CONTACTS } from './contactsData';

class About extends React.Component {
  render() {
    const renderContacts = elem =>  <li key={elem}>{elem}: {CONTACTS[elem]}</li>;

    return (
      <div>
        <ul>
          {Object.keys(CONTACTS).map(renderContacts)}
        </ul>
      </div>
    );
  }
}

export default About;
