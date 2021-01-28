import React from 'react';
import { Row, Col } from 'antd';
import Pregunta from './components/Pregunta/Pregunta'
function App() {
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <Pregunta/>
      </header>
      
    </div>
  );
}

export default App;
