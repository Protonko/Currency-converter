import React from 'react';
import './Calc.css';

const SELL_COEFFICIENT = 1.1;
const BUY_COEFFICIENT = 0.9;

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result : 0,
      coefficient : BUY_COEFFICIENT,
    }

    this.calcRate = this.calcRate.bind(this);
    this.changeCoefficient = this.changeCoefficient.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
  }

  static getDerivedStateFromProps(props) {
    return {rate : props.rate}
  }

  calcRate(event) {
    event.preventDefault();

    const elements = event.target.elements; // Коллекция элементов
    const countCurrency = elements['count-currency'].value;
    const typeCurrency = elements['type-currency'].value;
    const result = this.state.coefficient * (countCurrency / this.state.rate[typeCurrency])

    this.setState({result})
  }

  changeCoefficient(event) {
    const isSale = event.target.id === 'sale';

    this.setState({coefficient: isSale ? SELL_COEFFICIENT : BUY_COEFFICIENT})
  }

  renderOptions(keyName, index) {
    return <option key={index} value={keyName}>{keyName}</option>
  }

  render() {
    return (
      <div className="calculator">
        <h3>Exchange calculator</h3>
        <div className="block">
          <div>I want</div>
          <div>
            <input type="radio" name="radio" id="buy" defaultChecked="checked" onChange={this.changeCoefficient} />
            <label htmlFor="buy">
              Buy
            </label>
          </div>
          <div>
            <input type="radio" id="sale" name="radio" onChange={this.changeCoefficient} />
            <label htmlFor="sale">
              Sell
            </label>
          </div>
          <div>
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="150" name="count-currency" />
              <select name="type-currency">
                {Object.keys(this.props.rate).map(this.renderOptions)}
              </select>
              <input type="submit" value="How much do I get?" />
            </form>
          </div>
          <div>
            <h4>Result (EUR)</h4>
            <ul className="calc-res">
              <li>{this.state.result.toFixed(2)}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
