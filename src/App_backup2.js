import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('hello');
  }

  state = {
    count : 0,
  };

  add = () => {
    // this.state.count = 1; 직접 변경하는 경우 render() 다시 실행 X
    // this.setState({count : this.state.count + 1});
    this.setState(current => ({//함수 개선 current엔 현재 state가 넘어옴 
      count : current.count + 1,
    }))
  }
  minus = () => {
    // this.setState({count :  this.state.count - 1});
    this.setState(current => ({
      count : current.count - 1,
    }))
  }
  render() { //함수가 아니라 return 대신 render()
    console.log('render');
    return (
      <div>
        <h1>I'm a class component</h1>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    
    ); //JSX 반환 
  }
}

export default App;
