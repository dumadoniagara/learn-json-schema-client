import './App.css';
import React, { useState } from "react";
import Wheel from './components/Wheel';

function App(props) {
  const [places, setPlaces] = useState(['Bu Irma', 'Bu Haji Tuti', 'Pak Wawan', 'Siti Nurmala', 'Sis Nina', 'Sis Mirna'])
  return (
    <div className="App">
      <h1>Siapa Pemenang Arisan Minggu ini ?</h1>
      <Wheel items={places} />
    </div>
  );
}

export default App;
