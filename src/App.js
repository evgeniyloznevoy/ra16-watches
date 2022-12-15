import { useState } from 'react';
import './App.css';
import WatchesAddForm from './components/WatchesAddForm';
import WatchesList from './components/WatchesList';
import { nanoid } from 'nanoid';

function App() {
  const [watches, setWatches] = useState([{
    name: 'Moscow',
    timeZone: '3',
    id: nanoid()
  }]);

  const onAdd = (form) => {
    setWatches((prev) => ([...prev, form]))
  }

  const onDelete = (id) => {
    setWatches((prev) =>
      prev.filter((item) => item.id !== id)
    )
  }

  return (
    <div className="App">
      <WatchesAddForm onAdd={onAdd} />
      <WatchesList watches={watches} onDelete={onDelete} />

    </div>
  );
}

export default App;