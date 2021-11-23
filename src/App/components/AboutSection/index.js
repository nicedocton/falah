import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Video from '../../assets/video/video.mp4';
import './AboutSection.scss';

const AboutSection = () => {
	const { t } = useTranslation();
	const [onMobile, setOnMobile] = useState(false);

	const changeMobile = () => {
		if (window.innerWidth >= 767) {
			setOnMobile(true);
		} else {
			setOnMobile(false);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', changeMobile);
	}, []);

	return (
		<div className='about' id='about'>
			<div className='about__bg'>
				{onMobile === false && (
					<video
						autoPlay
						loop
						muted
						src={Video}
						type='video/mp4'
					></video>
				)}
			</div>
			<div className='about__container _container'>
				<div
					className='about__content'
					data-aos='slide-up'
					data-aos-duration='1000'
				>
					<div className='about__title title _white'>
						{t('about.title')}
					</div>
					<div className='about__text'>
						<p>{t('about.text.0')}</p>
						<p>{t('about.text.1')}</p>
						<p>{t('about.text.2')}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
