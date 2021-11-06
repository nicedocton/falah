import React from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import App from './App/App';

i18n.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		supportedLngs: ['uz', 'ru', 'en'],
		fallbackLng: 'en',
		detection: {
			order: ['subdomain', 'path', 'cookie', 'htmlTag', 'localStorage'],
			caches: ['cookie'],
		},
		backend: { loadPath: '/assets/locales/{{lng}}/translation.json' },
		react: { useSuspense: false },
	});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
