import React from 'react';
import { useTranslation } from 'react-i18next';
import icon1 from '../../assets/icons/mission1.svg';
import icon2 from '../../assets/icons/mission2.svg';
import icon3 from '../../assets/icons/mission3.svg';
import './MissionSection.scss';

const MissionSection = () => {
	const { t } = useTranslation();
	return (
		<div className='mission' id='mission'>
			<div className='mission__container _container'>
				<div className='mission__title title'>{t('mission.title')}</div>
				<div className='mission__row'>
					<div className='mission__column'>
						<div className='mission__item item-mission'>
							<div className='item-mission__image'>
								<span>
									<img src={icon1} alt='' />
								</span>
							</div>
							<div className='item-mission__head'>
								{t('mission.headText.0')}
							</div>
							<div className='item-mission__text'>
								{t('mission.text.0')}
							</div>
						</div>
					</div>
					<div className='mission__column'>
						<div className='mission__item item-mission'>
							<div className='item-mission__image'>
								<span>
									<img src={icon2} alt='' />
								</span>
							</div>
							<div className='item-mission__head'>
								{t('mission.headText.1')}
							</div>
							<div className='item-mission__text'>
								{t('mission.text.1')}
							</div>
						</div>
					</div>
					<div className='mission__column'>
						<div className='mission__item item-mission'>
							<div className='item-mission__image'>
								<span>
									<img src={icon3} alt='' />
								</span>
							</div>
							<div className='item-mission__head'>
								{t('mission.headText.2')}
							</div>
							<div className='item-mission__text'>
								{t('mission.text.2')}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MissionSection;
