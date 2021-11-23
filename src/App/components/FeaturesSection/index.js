import React from 'react';
import { useTranslation } from 'react-i18next';
import item1 from '../../assets/img/falah2.png';
import item2 from '../../assets/img/falah3.png';
import item3 from '../../assets/img/falah4.png';
import './FeaturesSection.scss';

const FeaturesSection = () => {
	const { t } = useTranslation();
	return (
		<div className='features' id='features'>
			<div className='features__container _container'>
				<div className='title features__title'>
					{t('features.title')}
				</div>
				<div className='features__content'>
					<div
						className='features__item fItem _item1'
						data-aos='fade-left'
						data-aos-duration='1000'
					>
						<div className='fItem__image _image1'>
							<img src={item1} alt='' />
						</div>
						<div className='fItem__text'>
							<p>{t('features.text.0')}</p>
						</div>
						<div className='fItem__bg'></div>
					</div>
					<div
						className='features__item fItem _item2'
						data-aos='fade-right'
						data-aos-duration='1000'
					>
						<div className='fItem__text'>
							<p>{t('features.text.1.0')}</p>
							<p>{t('features.text.1.1')}</p>
							<p>{t('features.text.1.2')}</p>
						</div>
						<div className='fItem__image _image2'>
							<img src={item2} alt='' />
						</div>
						<div className='fItem__bg'></div>
					</div>
					<div
						className='features__item fItem _item3'
						data-aos='fade-left'
						data-aos-duration='1000'
					>
						<div className='fItem__image _image3'>
							<img src={item3} alt='' />
						</div>
						<div className='fItem__text'>
							{t('features.text.2')}
						</div>
						<div className='fItem__bg'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesSection;
