import React, { useState, useEffect } from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Language from '../Language';
import './Navbar.scss';

const Navbar = ({ isOpen, toggle }) => {
	const { t } = useTranslation();
	const [scrollNav, setScrollNav] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	return (
		<nav className={`navbar ${!isOpen && scrollNav ? '_scroll' : ''}`}>
			<div className='navbar__container'>
				<div className='navbar__logo logo' onClick={toggleHome}>
					<svg
						width='183'
						height='47'
						viewBox='0 0 183 47'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0 44.7918L0 46.4585H45V44.7918H0Z'
							className='logo_img-corner'
						/>
						<path
							d='M1.66667 0.625H0L0 46.4583H1.66667V0.625Z'
							className='logo_img-corner'
						/>
						<path
							d='M44.9999 0.625H43.3333V46.4583H44.9999V0.625Z'
							className='logo_img-corner'
						/>
						<path
							d='M0 8.14199e-05L0 1.66675L45 1.66675V8.14199e-05L0 8.14199e-05Z'
							className='logo_img-corner'
						/>
						<rect
							width='2.77204'
							height='2.77204'
							transform='translate(30.567 9.98584) rotate(-45)'
							className='logo_img'
						/>
						<circle
							cx='32.5263'
							cy='9.98462'
							r='1.38602'
							transform='rotate(-45 32.5263 9.98462)'
							className='logo_img'
						/>
						<path
							d='M11.5407 30.1609H8.17438V38.5663H11.5407V30.1609Z'
							className='logo_img'
						/>
						<path
							d='M21.6399 8.30664H18.2736V33.5229H21.6399V8.30664Z'
							className='logo_img'
						/>
						<path
							d='M16.5902 9.98804H13.2239V33.5232H16.5902V9.98804Z'
							className='logo_img'
						/>
						<path
							d='M11.5407 9.98804H8.17438V28.48H11.5407V9.98804Z'
							className='logo_img'
						/>
						<path
							d='M16.5902 11.6688V8.30664H8.17442V11.6688H16.5902Z'
							className='logo_img'
						/>
						<path
							d='M26.6892 8.30664H23.3229V33.5229H26.6892V8.30664Z'
							className='logo_img'
						/>
						<path
							d='M8.17438 30.161V33.5232H26.6891V30.161H8.17438Z'
							className='logo_img'
						/>
						<path
							d='M8.17438 35.2042V38.5664H36.7881V35.2042H8.17438Z'
							className='logo_img'
						/>
						<path
							d='M6.49052 3.26489H3.12421V43.611H6.49052V3.26489Z'
							className='logo_img'
						/>
						<path
							d='M41.8376 3.26367H38.4713V43.6097H41.8376V3.26367Z'
							className='logo_img'
						/>
						<path
							d='M3.125 3.26356V6.62573L41.8376 6.62573V3.26356L3.125 3.26356Z'
							className='logo_img'
						/>
						<path
							d='M3.125 40.2477V43.6099H40.1545V40.2477H3.125Z'
							className='logo_img'
						/>
						<path
							d='M33.4217 16.7123V30.161H31.7386V16.7123H33.4217ZM36.788 13.3501H28.3723V33.5231H36.788V13.3501Z'
							className='logo_img'
						/>
						<path
							d='M26.3663 29.6811C25.9199 29.6811 25.4918 29.504 25.1761 29.1887C24.8605 28.8734 24.6832 28.4459 24.6832 28C24.6842 28.7093 24.5347 29.4108 24.2446 30.0583C23.9545 30.7057 23.5303 31.2845 23 31.7563C23.9239 32.5868 25.1234 33.0453 26.3663 33.0433H33.0989L31.4158 29.6811H26.3663Z'
							className='logo_img'
						/>
						<path d='M58.2577 4.99067V12.0928H70.696V17.0835H58.2577V26.8729H52.0386V0H72.3468V4.99067H58.2577Z' />
						<path d='M93.1301 21.1144H80.6534L78.2732 26.8729H71.9005L83.8781 0H90.0205L102.036 26.8729H95.5102L93.1301 21.1144ZM91.1722 16.3924L86.9109 6.10398L82.6496 16.3924H91.1722Z' />
						<path d='M104.825 0H111.044V21.8054H124.519V26.8729H104.825V0Z' />
						<path d='M145.916 21.1144H133.439L131.059 26.8729H124.686L136.664 0H142.806L154.822 26.8729H148.296L145.916 21.1144ZM143.958 16.3924L139.697 6.10398L135.436 16.3924H143.958Z' />
						<path d='M182.257 0V26.8729H176.038V15.855H163.83V26.8729H157.611V0H163.83V10.5956H176.038V0H182.257Z' />
						<path d='M52 30.0294H55.5918V45.7308H52V30.0294Z' />
						<path d='M73.5095 30.0294V45.7308H70.5606L62.8226 36.1978V45.7308H59.2751V30.0294H62.2462L69.962 39.5624V30.0294H73.5095Z' />
						<path d='M92.0166 30.0294L85.2985 45.7308H81.751L75.0551 30.0294H78.9352L83.6578 41.2447L88.4469 30.0294H92.0166Z' />
						<path d='M105.33 42.8148V45.7308H93.3124V30.0294H105.041V32.9454H96.8821V36.3548H104.088V39.1811H96.8821V42.8148H105.33Z' />
						<path d='M113.287 46C112.06 46 110.87 45.8355 109.717 45.5065C108.579 45.1626 107.663 44.7214 106.968 44.1831L108.187 41.4466C108.853 41.94 109.643 42.3363 110.56 42.6354C111.476 42.9345 112.393 43.084 113.309 43.084C114.329 43.084 115.083 42.9345 115.571 42.6354C116.058 42.3214 116.302 41.9101 116.302 41.4017C116.302 41.0279 116.155 40.7213 115.859 40.482C115.578 40.2278 115.209 40.026 114.75 39.8764C114.307 39.7269 113.701 39.5624 112.932 39.383C111.75 39.0988 110.782 38.8147 110.028 38.5306C109.274 38.2465 108.624 37.7904 108.077 37.1623C107.544 36.5343 107.278 35.6969 107.278 34.6501C107.278 33.7379 107.522 32.9155 108.01 32.1828C108.498 31.4351 109.23 30.8444 110.205 30.4107C111.195 29.9771 112.4 29.7603 113.819 29.7603C114.809 29.7603 115.778 29.8799 116.724 30.1191C117.67 30.3584 118.497 30.7023 119.207 31.1509L118.098 33.9099C116.665 33.0875 115.231 32.6762 113.797 32.6762C112.792 32.6762 112.045 32.8407 111.558 33.1697C111.085 33.4987 110.848 33.9323 110.848 34.4707C110.848 35.009 111.122 35.4128 111.668 35.6819C112.23 35.9361 113.08 36.1903 114.218 36.4446C115.401 36.7287 116.369 37.0128 117.123 37.2969C117.877 37.581 118.52 38.0296 119.052 38.6427C119.599 39.2558 119.872 40.0858 119.872 41.1325C119.872 42.0298 119.621 42.8522 119.118 43.5999C118.63 44.3326 117.891 44.9158 116.901 45.3495C115.911 45.7831 114.706 46 113.287 46Z' />
						<path d='M125.325 32.9903H120.358V30.0294H133.883V32.9903H128.917V45.7308H125.325V32.9903Z' />
						<path d='M143.115 46C141.504 46 140.048 45.6485 138.748 44.9457C137.462 44.2429 136.449 43.2784 135.71 42.0522C134.986 40.811 134.624 39.4203 134.624 37.8801C134.624 36.3399 134.986 34.9567 135.71 33.7305C136.449 32.4893 137.462 31.5173 138.748 30.8145C140.048 30.1117 141.504 29.7603 143.115 29.7603C144.727 29.7603 146.175 30.1117 147.461 30.8145C148.747 31.5173 149.76 32.4893 150.499 33.7305C151.238 34.9567 151.607 36.3399 151.607 37.8801C151.607 39.4203 151.238 40.811 150.499 42.0522C149.76 43.2784 148.747 44.2429 147.461 44.9457C146.175 45.6485 144.727 46 143.115 46ZM143.115 42.9045C144.032 42.9045 144.86 42.6952 145.599 42.2765C146.338 41.8428 146.914 41.2447 147.328 40.482C147.757 39.7194 147.971 38.8521 147.971 37.8801C147.971 36.9081 147.757 36.0408 147.328 35.2782C146.914 34.5155 146.338 33.9249 145.599 33.5062C144.86 33.0725 144.032 32.8557 143.115 32.8557C142.199 32.8557 141.371 33.0725 140.632 33.5062C139.893 33.9249 139.309 34.5155 138.881 35.2782C138.467 36.0408 138.26 36.9081 138.26 37.8801C138.26 38.8521 138.467 39.7194 138.881 40.482C139.309 41.2447 139.893 41.8428 140.632 42.2765C141.371 42.6952 142.199 42.9045 143.115 42.9045Z' />
						<path d='M164.195 45.7308L161.202 41.3568H157.899V45.7308H154.307V30.0294H161.025C162.399 30.0294 163.589 30.2612 164.594 30.7248C165.614 31.1883 166.398 31.8463 166.945 32.6987C167.492 33.551 167.765 34.5604 167.765 35.7268C167.765 36.8932 167.484 37.9025 166.922 38.7549C166.376 39.5923 165.592 40.2353 164.572 40.6839L168.053 45.7308H164.195ZM164.129 35.7268C164.129 34.8445 163.848 34.1716 163.286 33.708C162.725 33.2295 161.904 32.9903 160.825 32.9903H157.899V38.4633H160.825C161.904 38.4633 162.725 38.224 163.286 37.7455C163.848 37.267 164.129 36.5941 164.129 35.7268Z' />
						<path d='M175.71 46C174.483 46 173.294 45.8355 172.141 45.5065C171.002 45.1626 170.086 44.7214 169.391 44.1831L170.611 41.4466C171.276 41.94 172.067 42.3363 172.983 42.6354C173.9 42.9345 174.816 43.084 175.732 43.084C176.752 43.084 177.506 42.9345 177.994 42.6354C178.482 42.3214 178.726 41.9101 178.726 41.4017C178.726 41.0279 178.578 40.7213 178.282 40.482C178.001 40.2278 177.632 40.026 177.174 39.8764C176.73 39.7269 176.124 39.5624 175.356 39.383C174.173 39.0988 173.205 38.8147 172.451 38.5306C171.697 38.2465 171.047 37.7904 170.5 37.1623C169.968 36.5343 169.702 35.6969 169.702 34.6501C169.702 33.7379 169.946 32.9155 170.433 32.1828C170.921 31.4351 171.653 30.8444 172.628 30.4107C173.619 29.9771 174.823 29.7603 176.242 29.7603C177.233 29.7603 178.201 29.8799 179.147 30.1191C180.093 30.3584 180.921 30.7023 181.63 31.1509L180.522 33.9099C179.088 33.0875 177.654 32.6762 176.22 32.6762C175.215 32.6762 174.469 32.8407 173.981 33.1697C173.508 33.4987 173.271 33.9323 173.271 34.4707C173.271 35.009 173.545 35.4128 174.092 35.6819C174.653 35.9361 175.503 36.1903 176.642 36.4446C177.824 36.7287 178.792 37.0128 179.546 37.2969C180.3 37.581 180.943 38.0296 181.475 38.6427C182.022 39.2558 182.295 40.0858 182.295 41.1325C182.295 42.0298 182.044 42.8522 181.542 43.5999C181.054 44.3326 180.315 44.9158 179.324 45.3495C178.334 45.7831 177.129 46 175.71 46Z' />
					</svg>
				</div>
				<div
					className={`mobileIcon ${isOpen ? '_active' : ''}`}
					onClick={toggle}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul className='navbar__menu menu'>
					<li>
						<Link
							to='about'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}
							activeClass='_active'
						>
							{t('mainMenu.about')}
						</Link>
					</li>
					<li>
						<Link
							to='partners'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}
							activeClass='_active'
						>
							{t('mainMenu.partners')}
						</Link>
					</li>
					<li>
						<Link
							to='projects'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}
							activeClass='_active'
						>
							{t('mainMenu.projects')}
						</Link>
					</li>
					<li>
						<Link
							to='contacts'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}
							activeClass='_active'
						>
							{t('mainMenu.contacts')}
						</Link>
					</li>
				</ul>
				<div className='navbar__action'>
					<div className='navbar__info info'>
						<div className='info__adress'>
							<a href='tel:+998935294862'>+998 93 529 48 62</a>
							<a href='https://t.me/'>Telegram: @falahuz</a>
						</div>
						<div className='info__socials'>
							<a
								href='https://www.facebook.com/'
								target='_blank'
								className='info__socials-link'
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
								className='info__socials-link'
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
								className='info__socials-link'
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
					<Language />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
