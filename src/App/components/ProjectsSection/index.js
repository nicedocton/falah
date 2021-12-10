import React from 'react';
import { useTranslation } from 'react-i18next';
import safar from '../../assets/img/safar.jpg';
import artcrafts from '../../assets/img/artcrafts.jpg';
import googolplex from '../../assets/img/googolplex.jpg';
import tenderzone from '../../assets/img/tenderzone.jpg';
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
					<div
						className='projects__item'
						data-aos='zoom-in'
						data-aos-duration='1000'
					>
						<div className='project'>
							<div className='project__image'>
								<img
									src={safar}
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
					<div
						className='projects__item'
						data-aos='zoom-in'
						data-aos-duration='1000'
					>
						<div className='project'>
							<div className='project__image'>
								<img
									src={artcrafts}
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
					<div
						className='projects__item'
						data-aos='zoom-in'
						data-aos-duration='1000'
					>
						<div className='project'>
							<div className='project__image'>
								<img
									src={googolplex}
									alt={t('projects.googolplex.title')}
								/>
							</div>
							<div className='project__info'>
								<div>
									<div className='project__head'>
										{t('projects.googolplex.title')}
									</div>
									<div className='project__text'>
										{t('projects.googolplex.text')}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className='projects__item'
						data-aos='zoom-in'
						data-aos-duration='1000'
					>
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
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
