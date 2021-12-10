import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import './Sidebar.scss';

const Sidebar = ({ isOpen, toggle }) => {
	const { t } = useTranslation();

	return (
		<aside className={`sidebar ${isOpen ? 'isOpen' : ''}`} onClick={toggle}>
			<div className='sidebarContainer'>
				<ul className='sidebar__menu'>
					<li>
						<Link
							to='about'
							className='sidebar__link'
							onClick={toggle}
						>
							{t('mainMenu.about')}
						</Link>
					</li>
					<li>
						<Link
							to='partners'
							className='sidebar__link'
							onClick={toggle}
						>
							{t('mainMenu.partners')}
						</Link>
					</li>
					<li>
						<Link
							to='projects'
							className='sidebar__link'
							onClick={toggle}
						>
							{t('mainMenu.projects')}
						</Link>
					</li>
					<li>
						<Link
							to='contacts'
							className='sidebar__link'
							onClick={toggle}
						>
							{t('mainMenu.contacts')}
						</Link>
					</li>
				</ul>
				<div class='sidebar__info'>
					<div className='sidebar__info-adress'>
						<a href='tel:+998935294862'>+998 93 529 48 62</a>
						<a href='https://t.me/'>Telegram: @falahuz</a>
					</div>
					<div className='sidebar__info-socials'>
						<a
							href='https://www.facebook.com/'
							target='_blank'
							className='sidebar__info-link'
							rel='noopener noreferrer'
						>
							<svg
								width='27'
								height='27'
								viewBox='0 0 27 27'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M22.9349 0.679932H4.20611C2.09157 0.679932 0.480499 2.29101 0.480499 4.40555V23.1343C0.480499 25.2489 2.09157 26.8599 4.20611 26.8599H22.9349C25.0494 26.8599 26.6605 25.2489 26.6605 23.1343V4.40555C26.6605 2.29101 25.0494 0.679932 22.9349 0.679932ZM13.5705 21.6239C17.9003 21.6239 21.4245 18.2004 21.4245 14.072C21.4245 13.3672 21.3238 12.5616 21.1224 11.9575H23.3376V22.6309C23.3376 23.1343 22.9349 23.6378 22.3307 23.6378H4.81027C4.30681 23.6378 3.80335 23.235 3.80335 22.6309V11.8568H6.11927C5.91789 12.5616 5.81719 13.2665 5.81719 13.9713C5.7165 18.2004 9.24073 21.6239 13.5705 21.6239ZM13.5705 18.6032C10.7511 18.6032 8.53588 16.3879 8.53588 13.6692C8.53588 10.9505 10.7511 8.73532 13.5705 8.73532C16.3899 8.73532 18.6051 10.9505 18.6051 13.6692C18.6051 16.4886 16.3899 18.6032 13.5705 18.6032ZM23.237 7.82908C23.237 8.43324 22.7335 8.9367 22.1293 8.9367H19.31C18.7058 8.9367 18.2023 8.43324 18.2023 7.82908V5.11039C18.2023 4.50624 18.7058 4.00278 19.31 4.00278H22.1293C22.7335 4.00278 23.237 4.50624 23.237 5.11039V7.82908Z' />
							</svg>
						</a>
						<a
							href='https://www.instagram.com/'
							target='_blank'
							className='sidebar__info-link'
							rel='noopener noreferrer'
						>
							<svg
								width='27'
								height='27'
								viewBox='0 0 27 27'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M26.8602 4.48013C26.8602 2.17412 24.8255 0.139404 22.5195 0.139404H5.02093C2.71492 0.139404 0.680206 2.17412 0.680206 4.48013V21.9787C0.680206 24.2847 2.71492 26.3194 5.02093 26.3194H13.838V16.4171H10.5825V12.0764H13.838V10.313C13.838 7.32873 16.0084 4.75142 18.7213 4.75142H22.2482V9.09214H18.7213C18.3144 9.09214 17.9075 9.49909 17.9075 10.313V12.0764H22.2482V16.4171H17.9075V26.3194H22.5195C24.8255 26.3194 26.8602 24.2847 26.8602 21.9787V4.48013Z' />
							</svg>
						</a>
						<a
							href='https://telegram.org/'
							target='_blank'
							className='sidebar__info-link'
							rel='noopener noreferrer'
						>
							<svg
								width='32'
								height='28'
								viewBox='0 0 32 28'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M0.800089 13.576L7.88116 16.2164L10.6416 25.0977C10.7616 25.6978 11.4817 25.8178 11.9618 25.4578L15.9223 22.2173C16.2824 21.8572 16.8825 21.8572 17.3625 22.2173L24.4436 27.3781C24.9237 27.7381 25.6438 27.4981 25.7638 26.898L31.0446 1.69426C31.1646 1.09417 30.5645 0.49409 29.9644 0.734125L0.800089 12.0158C0.0799833 12.2558 0.0799833 13.336 0.800089 13.576ZM10.2815 14.8962L24.2035 6.37495C24.4436 6.25494 24.6836 6.61499 24.4436 6.73501L13.0419 17.4166C12.6819 17.7766 12.3218 18.2567 12.3218 18.8568L11.9618 21.7372C11.9618 22.0973 11.3617 22.2173 11.2416 21.7372L9.80141 16.4564C9.44136 15.8564 9.68143 15.1362 10.2815 14.8962Z' />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
