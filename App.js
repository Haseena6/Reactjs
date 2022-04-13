import React from 'react';
//import logo from './logo.svg';
import './App.css';
class FirstComponent extends React.Component
{
  render(){
    return(
      <div className="App">
      <h1>Hellooo..!</h1>
    </div>
    )
  }
}
class FirstComponent1 extends React.Component
{
  render(){
    return(
      <div className="App">
      <h1>Hellooo..Hiiii!</h1>
    </div>
    )
  }
}
class FirstComponent2 extends React.Component
{
  render(){
    return(
      <div className="App">
      <h1>Hellooo..Hiii..Hiii!</h1>
      <FirstComponent1></FirstComponent1>
    </div>
    )
  }
}
function App() {
  return (
    <div className="App">
      <h1>Parent</h1>
      <FirstComponent></FirstComponent>
      <FirstComponent2></FirstComponent2>
    </div>
  );
}
export default App;