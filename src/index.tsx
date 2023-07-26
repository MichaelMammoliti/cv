import ReactDOM from 'react-dom/client';
import { App } from './App';
import './styles/index.css';

const entry = document.querySelector('#app');
const root = ReactDOM.createRoot(entry);

root.render(<App />);
