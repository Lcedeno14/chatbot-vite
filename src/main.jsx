import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
window.MyReactApp = {
    mount: (selector) => {
        const container = document.querySelector(selector);
        const root = createRoot(container);//Initialize the React root
        root.render(<App />); // Render the React component
    }
}