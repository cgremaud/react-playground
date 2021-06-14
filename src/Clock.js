import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {

    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.foo = setInterval( //I guess this line just declares and initializes this field every time this method is called? 
        () => this.tick(), 
        1000
      );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerId); //this is only called if the clock element is removed from the DOM so the count doesn't continue while it's not displayed. 
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
  }

  export default Clock; 