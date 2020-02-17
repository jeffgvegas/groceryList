import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = ()=> {
  const [inputValue, setInputValue] = useState("")
  const [groceries, setGroceries] = useState([]) 
  const listItems = groceries.map((grocery, i)=> <li key={i}>{grocery}</li>)

  
  const storeEnteredText = (e)=> {
    setInputValue(e.target.value)
    
  }

  const handleButtonClick = (e)=> {
    setGroceries([...groceries, inputValue])
  }


  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h2> In React</h2>
      <h1>Grocery List</h1>
      <input className="textInput" onChange={storeEnteredText}></input>
      <button className="addBtn" onClick={handleButtonClick}>Add Item</button>
      <ul className="listItems">{listItems}</ul>
      
    </div>
  );
}

export default App;
