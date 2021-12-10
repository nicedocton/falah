import React from 'react';
import { useTranslation } from 'react-i18next';
import './SubscribeSection.scss';

const SubscribeSection = () => {
	const { t } = useTranslation();
	return (
		<div className='subscribe' id='subscribe'>
			<div className='subscribe__bg'></div>
			<div className='subscribe__container _container'>
				<div
					className='subscribe__content'
					data-aos='fade-left'
					data-aos-duration='1500'
					data-aos-delay='300'
				>
					<div className='subscribe__title'>
						{t('subscribe.title')}
					</div>
					<div className='subscribe__text'>{t('subscribe.text')}</div>
					<div className='subscribe__form'>
						<form action='#'>
							<div className='subscribe__row'>
								<input
									type='text'
									className='input'
									placeholder={t('subscribe.input.name')}
								/>
							</div>
							<div className='subscribe__row'>
								<input
									type='text'
									className='input'
									placeholder={t('subscribe.input.phone')}
								/>
							</div>
							<div className='subscribe__row'>
								<textarea
									rows='5'
									className='input'
									placeholder={t('subscribe.input.textarea')}
								></textarea>
							</div>
							<div className='subscribe__row'>
								<button className='subscribe__btn btn'>
									{t('subscribe.input.btn')}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubscribeSection;
