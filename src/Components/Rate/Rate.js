import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      currencyRate: {},
    };
    this.currency = ['USD', 'RUB', 'CAD', 'PHP'];

    this.renderCard = this.renderCard.bind(this);
  }

  componentDidMount() {
    this.getRate();
  }

  getRate() {
    fetch('https://api.exchangeratesapi.io/latest')
      .then(data => {
        return data.json();
      })
      .then(data => {
        let result = {};

        // Получаем текущую дату и присваиваем ее стейту
        this.setState({date: data.date});
        // Получаем нужные нам валюты
        this.currency.map(elem => result[elem] = data.rates[elem]);
        // Присваиваем стейту полученные валюты
        this.setState({currencyRate: result});
      });
  }

  renderCard(keyName, index) {
    return (
      <div className="block flex-item" key={index}>
        <div className="currency-name">{keyName}</div>
        <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}</div>
        <p>* Price for 1 EUR</p>
      </div>
    );
  }

  render() {
    return (
      <div className="rate">
        <h3>Exchange rates on {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map(this.renderCard)}
        </div>
        <Calc rate={this.state.currencyRate}/>
      </div>
    );
  }
}

export default Rate;
