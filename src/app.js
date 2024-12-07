import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const fetchData = () => {
    fetch('http://backend-mig-static-ip:5000/api')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
<>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to The Miri's App!!!</h1>
        <h1>Hashem please help me!!!!</h1>
        <button onClick={fetchData} className="fetch-button">Fetch backend</button>
        <p>{message}</p>
      </header>
    </div>
</>
  );
}

export default App;
