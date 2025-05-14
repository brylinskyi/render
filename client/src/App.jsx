import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
      fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(data => setMessage(data.time))
      .catch(() => setMessage('Error fetching from backend'));
  }, []);

  
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Frontend</h1>
      <p>Backend says: <strong>{message}</strong></p>
    </div>
  );
}

export default App;
