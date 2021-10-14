import React, {Component} from "react";
import ReactDOM from "react-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App1 from './App1';

class App extends Component{
  render(){
    const marginAuto={
      textAlign:"center"
    }
    const marginLeft={
      marginLeft:"3%"
    }
    return(
      <React.Fragment>
        <h1 style={marginLeft}>SpaceX Launch Programs</h1>
        <App1 />
        <h4 style={marginAuto}>Developed by: Rohit Sarkar</h4>
      </React.Fragment>
    );
  }
}
export default App;