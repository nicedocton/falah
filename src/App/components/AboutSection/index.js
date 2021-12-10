import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Video from '../../assets/video/video.mp4';
import './AboutSection.scss';

function useWindowSize() {
	const [onMobile, setOnMobile] = useState(true);
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 767) {
				setOnMobile(true);
			} else {
				setOnMobile(false);
			}
		};
		window.addEventListener('resize', handleResize);
	}, []);
	return onMobile;
}

const AboutSection = () => {
	const { t } = useTranslation();
	const onMobile = useWindowSize();
	return (
		<div className='about' id='about'>
			<div className='about__bg'>
				{onMobile === true && (
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
					<div className='about__title title _green'>
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
