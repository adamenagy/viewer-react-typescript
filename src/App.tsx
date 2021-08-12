import { Component } from 'react';
import Viewer from './Viewer'
import './App.css';

//const list: any = ["viewer1", "viewer2"];

interface IProps {
}

interface IState {
  list?: any;
}

class App extends Component<IProps, IState> {
  toggle() {
    alert("hello");
    if (this.state.list.length > 0) {
      this.setState({ list: []});
    } else {
      this.setState({ list: ["viewer1", "viewer2"]});
    }
  }  

  constructor(props: IProps) {
    super(props);

    this.state = { list: ["viewer1", "viewer2"] };
  }

  render () { 
    return (
      <div className="App">
        <button id="myButton" onClick={this.toggle.bind(this)}>
          Toggle
        </button>
        {this.state.list.map((item: any) => {
          return <Viewer key={item} container={item} />;
        })}
      </div>
    );
  }
}

export default App;
