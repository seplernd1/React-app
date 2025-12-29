import React, { useEffect, useState } from 'react';
import logo from './catalyst.svg';

const App = () => {
  const [greeting, setGreeting] = useState('…');

  useEffect(() => {
    fetch('/api/greeting')
      .then((res) => res.json())
      .then((data) => setGreeting(data.message))
      .catch(() => setGreeting('hallo seple'));
  }, []);

  return (
    <main className="app-shell">

      <section className="card">
        <img src={logo} alt="Zoho Catalyst" className="brand" />
        <p className="greeting">{greeting}</p>
      </section>
    </main>
  );
};

export default App;
