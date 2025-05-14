import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
      fetch('https://render-i5kl.onrender.com/api')
      .then(res => res.json())
      .then(data => setMessage(data.time))
      .catch(() => setMessage('Error fetching from backend'));
  }, []);

  
  return (
    <div>
      <p>Frontend part: <strong>static</strong></p>
      <p>Backend says: <strong>{message}</strong></p>
      <p><strong>Brylinskyi Mykhailo</strong></p>
    </div>
  );
}

export default App;
