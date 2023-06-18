import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EquipmentProvider } from './EquipmentContext';

ReactDOM.render(
  <React.StrictMode>
    <EquipmentProvider>
      <App />
    </EquipmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
