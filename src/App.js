import React, {useState} from 'react';
import ToDoItem from './ToDoItem';
import './App.css';

function App() {
  const [items, setItems] = useState([
    {text: 'Learn React', completed: false},
    {text: 'Build a To-Do App', completed: false}
  ]);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, {text: input, completed: false}]);
      setInput('');
    }
  };

  const markComplete = index => {
    const newItems = items.map((item, i) => {
      if (i === index) {
        return {...item, completed: !item.completed};
      }
      return item;
    });
    setItems(newItems);
  }

  return (
    <div className="App">
      <h1>React To-Do App</h1>
      <input 
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addItem}>Add</button>
      <div>
        {items.map((item, index) => (
          <ToDoItem 
            key = {index}
            index = {index}
            item = {item}
            markComplete={markComplete}
          />
        ))}
      </div>
    </div>
  );
}
export default App;