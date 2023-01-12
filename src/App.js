import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div style={{position: 'fixed', background: 'hsl(195deg, 20%, 86%)', height: '40%', width: '100%', bottom: 0 }}></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
