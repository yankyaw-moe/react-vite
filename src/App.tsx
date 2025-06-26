import './App.css';
import Item from './Item';
import List from './List';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    { id: 1, content: 'Hello, World!', name: 'Alice' },
    { id: 2, content: 'React is fun.', name: 'Bob' },
    { id: 3, content: 'Yay, interesting.', name: 'Chris' },
  ]);

  const remove = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ maxWidth: 600, margin: '20px auto' }}>
      <h1>Yaycha</h1>
      <List>
        {items.map((item) => (
          <Item key={item.id} item={item} remove={remove} />
        ))}
      </List>
    </div>
  );
}

export default App;
