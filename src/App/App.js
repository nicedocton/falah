import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import welcomeBg from './assets/img/welcome.png';
import aboutBg from './assets/img/about.jpg';
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
									<img src={welcomeBg} alt='welcome' />
								</div>
							</div>
						</div>
					</div>
					<div className='welcome__image noMobile'>
						<img src={welcomeBg} alt='welcome' />
					</div>
				</section>
				<section className='about section'>
					<div className='about__container _container'>
						<div className='about__content'>
							<div className='about__text'>
								<div className='about__title title'>
									{t('about.title')}
								</div>
								<p>{t('about.text.0')}</p>
								<p>{t('about.text.1')}</p>
								<p>{t('about.text.2')}</p>
							</div>
							<div className='about__image'>
								<img src={aboutBg} alt='' />
							</div>
						</div>
					</div>
				</section>
				<section className='mission section'>
					<div className='mission__container _container'>
						<div className='mission__title title _white'>
							{t('mission.title')}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default App;
