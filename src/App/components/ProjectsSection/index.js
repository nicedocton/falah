import React from 'react';
import { useTranslation } from 'react-i18next';
import test from '../../assets/img/test.png';
import test2 from '../../assets/img/test2.png';
import tenderzone from '../../assets/img/tenderzone.png';
import './ProjectsSection.scss';

const ProjectsSection = () => {
	const { t } = useTranslation();
	return (
		<div className='projects' id='projects'>
			<div className='projects__container _container'>
				<div className='projects__title title'>
					{t('projects.title')}
				</div>
				<div className='projects__content'>
					<div className='projects__item'>
						<div className='project'>
							<div className='project__image'>
								<img
									src={test}
									alt={t('projects.safar.title')}
								/>
							</div>
							<div className='project__info'>
								<div>
									<div className='project__head'>
										{t('projects.safar.title')}
									</div>
									<div className='project__text'>
										{t('projects.safar.text')}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='projects__item'>
						<div className='project'>
							<div className='project__image'>
								<img
									src={tenderzone}
									alt={t('projects.tenderzone.title')}
								/>
							</div>
							<div className='project__info'>
								<div>
									<div className='project__head'>
										{t('projects.tenderzone.title')}
									</div>
									<div className='project__text'>
										{t('projects.tenderzone.text')}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='projects__item'>
						<div className='project'>
							<div className='project__image'>
								<img
									src={test2}
									alt={t('projects.artCrafts.title')}
								/>
							</div>
							<div className='project__info'>
								<div>
									<div className='project__head'>
										{t('projects.artCrafts.title')}
									</div>
									<div className='project__text'>
										{t('projects.artCrafts.text')}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='projects__item'>
						<div className='project'>
							<div className='project__image'>
								<img
									src={tenderzone}
									alt={t('projects.tenderzone.title')}
								/>
							</div>
							<div className='project__info'>
								<div>
									<div className='project__head'>
										{t('projects.tenderzone.title')}
									</div>
									<div className='project__text'>
										{t('projects.tenderzone.text')}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='projects__item'>
						<div className='project'>
							<div className='project__image'>
								<img
									src={test}
									alt={t('projects.safar.title')}
								/>
							</div>
							<div className='project__info'>
								<div>
									<div className='project__head'>
										{t('projects.safar.title')}
									</div>
									<div className='project__text'>
										{t('projects.safar.text')}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
