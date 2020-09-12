import React from 'react';
import './Footer.css';
import { LINKS } from './footerData';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.renderLinks = this.renderLinks.bind(this);
  }

  renderLinks(elem, index) {
    return (
      <li key={index}>
        <a href={elem.href}>{elem.name}</a>
      </li>
    )
  }

  render() {
    return (
     <footer className="footer" id="footer">
       <div className="footer-bottom">
         <div className="container">
           <div className="flex-container">
             <div className="flex-item">
               <h1 className="footer-title"><a href="http://egorermolaev.ru">2020 &copy; Egor Ermolaev</a></h1>
               <p>All Rights Reserved</p>
             </div>
             <div className="module-body">
               <ul className="list-unstyled">
                 {LINKS.map(this.renderLinks)}
               </ul>
             </div>
           </div>
         </div>
       </div>
     </footer>
    );
  }
}

export default Footer;
