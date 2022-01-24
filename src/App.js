import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Person from './components/Person';
import { useState } from 'react';
function App() {
  const doe = "Doe, Jane";
  const smith = "Smith, John";
  const [doeAge, setDoe] = useState(0);
  const [smithAge, setSmith] = useState(0);

  return (
    <div className="App">
      <Person name={doe} count={doeAge} />
      <Counter name={doe} count={doeAge} setCount={setDoe} />
      <Person name={smith} count={smithAge} />
      <Counter name={smith} count={smithAge} setCount={setSmith} />


    </div>
  );
}

export default App;
