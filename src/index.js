import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './Game';
import { Provider } from 'react-redux';
import { store } from './services/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<Game />
		</React.StrictMode>
	</Provider>,
);
