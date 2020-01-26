import React from 'react';
import './Footer.css';


class Footer extends React.Component {
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
                 <li>
                   <a href="/contact">Contacts</a>
                 </li>
                 <li>
                   <a href="/d">Guarantees</a>
                 </li>
                 <li>
                   <a href="/s">About</a>
                 </li>
                 <li>
                   <a href="/o">Return Terms</a>
                 </li>
                 <li>
                   <a href="/p">Service Agreement</a>
                 </li>
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
