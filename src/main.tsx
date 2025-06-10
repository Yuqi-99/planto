import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './app.css';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
} else {
	console.error('Could not find root element');
}
