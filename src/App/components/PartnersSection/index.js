import React from 'react';
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';
import partner1 from '../../assets/img/partners/1.png';
import partner2 from '../../assets/img/partners/2.png';
import partner3 from '../../assets/img/partners/3.png';
import partner4 from '../../assets/img/partners/4.png';
import partner5 from '../../assets/img/partners/5.png';
import partner6 from '../../assets/img/partners/6.png';
import partner7 from '../../assets/img/partners/7.png';
import partner8 from '../../assets/img/partners/8.png';
import partner9 from '../../assets/img/partners/9.png';

import './PartnerSection.scss';

const PartnerSection = () => {
	const { t } = useTranslation();
	return (
		<div className='partners' id='partners'>
			<div className='partners__container'>
				<div className='partners__title title'>
					{t('partners.title')}
				</div>
				<div
					className='partners__content'
					data-aos='fade-up'
					data-aos-duration='1000'
				>
					<Marquee gradient={false} speed={30}>
						<div className='slide'>
							<a
								href='https://google.com'
								target='_blank'
								className='slide__item'
								rel='noopener noreferrer'
							>
								<img src={partner1} alt='' />
							</a>
						</div>
						<div className='slide'>
							<a
								href='https://google.com'
								target='_blank'
								className='slide__item'
								rel='noopener noreferrer'
							>
								<img src={partner2} alt='' />
							</a>
						</div>
						<div className='slide'>
							<a
								href='https://google.com'
								target='_blank'
								className='slide__item'
								rel='noopener noreferrer'
							>
								<img src={partner3} alt='' />
							</a>
						</div>
						<div className='slide'>
							<a
								href='https://google.com'
								target='_blank'
								className='slide__item'
								rel='noopener noreferrer'
							>
								<img src={partner4} alt='' />
							</a>
						</div>
						<div className='slide'>
							<a
								href='https://google.com'
								target='_blank'
								className='slide__item'
								rel='noopener noreferrer'
							>
								<img src={partner5} alt='' />
							</a>
						</div>
						<div className='slide'>
							<a
								href='https://google.com'
								target='_blank'
								className='slide__item'
								rel='noopener noreferrer'
							>
								<img src={partner6} alt='' />
							</a>
						</div>
						<div className='slide'>
							<a
								href='https://google.com'
								target='_blank'
								className='slide__item'
								rel='noopener noreferrer'
							>
								<img src={partner7} alt='' />
							</a>
						</div>
						<div className='slide'>
							<a
								href='https://google.com'
								target='_blank'
								className='slide__item'
								rel='noopener noreferrer'
							>
								<img src={partner8} alt='' />
							</a>
						</div>
						<div className='slide'>
							<a
								href='https://google.com'
								target='_blank'
								className='slide__item'
								rel='noopener noreferrer'
							>
								<img src={partner9} alt='' />
							</a>
						</div>
					</Marquee>
				</div>
			</div>
		</div>
	);
};

export default PartnerSection;
