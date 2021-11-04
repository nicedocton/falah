import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import welcome from './assets/img/welcome.png';
import './scss/App.scss';

function App() {
	const { t } = useTranslation();
	return (
		<div className='wrapper'>
			<Header />
			<main className='main'>
				<section className='welcome section'>
					<div className='welcome__container _container'>
						<div className='welcome__row'>
							<div className='welcome__column'>
								<div className='welcome__content'>
									<div className='welcome__title'>
										{t('welcome.title')}
									</div>
									<div className='welcome__text'>
										{t('welcome.text')}
									</div>
									<div className='welcome__btns'>
										<button className='btn'>
											{t('welcome.button')}
										</button>
									</div>
								</div>
							</div>
							<div className='welcome__column onMobile'>
								<div className='welcome__image'>
									<img src={welcome} alt='welcome' />
								</div>
							</div>
						</div>
					</div>
					<div class='welcome__image noMobile'>
						<img src={welcome} alt='welcome' />
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default App;
