import React from 'react';
import './Calc.css';


class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result : 0,
      coefficient : 0.9,
    }  
  }
  
  static getDerivedStateFromProps(props, state) {
    return {rate : props.rate}
  }

  calcRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements; // Коллекция элементов
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;
    this.setState({result : (this.state.coefficient*(countCurrency / this.state.rate[typeCurrency]))})
  }

  currentK = (e) => {
  	(e.target.id === 'sale') ? this.setState({coefficient: 1.1}) : this.setState({coefficient: 0.9})
  }
  render() {
    return (
      <div className="calculator">
        <h3>Exchange calculator</h3>
        <div className="block">
          <div>I want</div>
          <div>
            <input type="radio" name="radio" id="buy" defaultChecked="checked" onChange={this.currentK}/>
            <label htmlFor="buy">
              Buy
            </label>
          </div>
          <div>
            <input type="radio" id="sale" name="radio" onChange={this.currentK} />
            <label htmlFor="sale">
              Sell
            </label>
          </div>
          <div>
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="150" name="count-currency" />
              <select name="type-currency">
                {/* Перебираем пропс, полученный в Rate.js */}
                {Object.keys(this.props.rate).map((keyName, index) => 
                  (
                    <option key={keyName} value={keyName}>{keyName}</option>
                  )
                )}
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
