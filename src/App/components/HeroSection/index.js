import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import hero from '../../assets/img/hero.png';
import './HeroSection.scss';

const HeroSection = () => {
	const { t } = useTranslation();
	return (
		<div className='hero' id='hero'>
			<div className='hero__container _container'>
				<div
					className='hero__content'
					data-aos='slide-right'
					data-aos-duration='1000'
				>
					<div className='hero__title'>{t('hero.title')}</div>
					<div className='hero__text'>{t('hero.text')}</div>
					<div className='hero__btn-wrap'>
						<Link
							to='about'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}
							className='hero__btn btn'
						>
							{t('hero.button')}
						</Link>
					</div>
				</div>
				<div className='hero__image'>
					<img src={hero} alt={t('hero.alt')} />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
