import React from 'react';
import ReactDOM from 'react-dom';
import App from 'routes/app.routes';
import { BrowserRouter } from 'react-router-dom';
import 'styles/global.scss';
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
