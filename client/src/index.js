import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
    <main className="dark text-foreground bg-background" style={{  minHeight: '100vh',paddingLeft:'20px',paddingRight:'20px' }}>

      <App />
    </main>
  </NextUIProvider>
);


