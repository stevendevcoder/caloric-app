import React from 'react';
import ReactDOM from 'react-dom';
import App from 'routes/app.routes';
import { BrowserRouter } from 'react-router-dom';
import 'styles/global.scss';
import { firebaseConfig } from './firebase/firebaseConfig';


ReactDOM.render(

		<BrowserRouter>
				<App />

			</BrowserRouter>

		,
	document.getElementById('root')
);
