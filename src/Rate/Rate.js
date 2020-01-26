import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date' : '',
      'curencyRate' : {}
    }
    this.curency = ['USD', 'RUB', 'CAD', 'PHP'];
    this.getRate();  
  }
  getRate = () => {
    // Получаем API курса валют
    fetch('https://api.exchangeratesapi.io/latest')
      .then(data => {
        return data.json();
      })
      .then(data => {
        // Получаем текущую дату и присваиваем ее стейту
        this.setState({date : data.date});
        let result = {};
        // Получаем нужные нам валюты
        this.curency.map(elem => result[elem] = data.rates[elem])
        // Присваиваем стейту полученные валюты
        this.setState({curencyRate : result}); 
      });
  }
  render() {
    return (
      <div className="rate">
        <h3>Exchange rates on {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.curencyRate).map((keyName, index) => 
            (
              <div className="block flex-item" key={keyName}>
                <div className="curency-name">{keyName}</div>
                <div className="curency-in">{this.state.curencyRate[keyName].toFixed(2)}</div>
                <p>* Price for 1 EUR</p>
              </div>
            )
          )}
        </div>
        <Calc rate={this.state.curencyRate}/>
      </div>
    );
  }
}

export default Rate;
