import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';

// Esconder loading spinner quando a app carregar
const hideLoadingSpinner = () => {
  const spinner = document.getElementById('loading-spinner');
  if (spinner) {
    spinner.style.opacity = '0';
    setTimeout(() => {
      spinner.style.display = 'none';
    }, 300);
  }
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Esconder spinner após o React montar
hideLoadingSpinner();
