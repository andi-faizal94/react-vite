import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='App'>
      <h1 className='text-2xl '>Hello from vite</h1>
    </div>
  );
}

export default App;
