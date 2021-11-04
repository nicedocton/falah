import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import './header.scss';

const languages = [
	{
		code: 'uz',
		name: "O'zbekcha",
		country_code: 'uz',
	},
	{
		code: 'ru',
		name: 'Русский',
		country_code: 'ru',
	},
	{
		code: 'en',
		name: 'English',
		country_code: 'gb',
	},
];

function useComponentVisible(initialIsVisible) {
	const [isComponentVisible, setIsComponentVisible] =
		useState(initialIsVisible);
	const ref = useRef(null);

	const handleHideDropdown = (event) => {
		if (event.key === 'Escape') {
			setIsComponentVisible(false);
		}
	};

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsComponentVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleHideDropdown, true);
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('keydown', handleHideDropdown, true);
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	return { ref, isComponentVisible, setIsComponentVisible };
}

function Header() {
	const { t } = useTranslation();
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(false);
	return (
		<header className='header'>
			<div className='header__container _container'>
				<div className='header__logo logo'>
					<svg
						width='183'
						height='47'
						viewBox='0 0 183 47'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0 44.7918L0 46.4585H45V44.7918H0Z'
							fill='#99C3AD'
						/>
						<path
							d='M1.66667 0.625061H0L0 46.4584H1.66667V0.625061Z'
							fill='#99C3AD'
						/>
						<path
							d='M44.9999 0.625061H43.3333V46.4584H44.9999V0.625061Z'
							fill='#99C3AD'
						/>
						<path
							d='M0 -4.06355e-05L0 1.66663L45 1.66663V-4.06355e-05L0 -4.06355e-05Z'
							fill='#99C3AD'
						/>
						<rect
							width='2.77204'
							height='2.77204'
							transform='translate(30.5671 9.98566) rotate(-45)'
							fill='white'
						/>
						<circle
							cx='32.5265'
							cy='9.98441'
							r='1.38602'
							transform='rotate(-45 32.5265 9.98441)'
							fill='white'
						/>
						<path
							d='M11.5406 30.1608H8.17432V38.5662H11.5406V30.1608Z'
							fill='white'
						/>
						<path
							d='M21.64 8.30643H18.2737V33.5227H21.64V8.30643Z'
							fill='white'
						/>
						<path
							d='M16.5902 9.98782H13.2239V33.523H16.5902V9.98782Z'
							fill='white'
						/>
						<path
							d='M11.5406 9.98782H8.17432V28.4798H11.5406V9.98782Z'
							fill='white'
						/>
						<path
							d='M16.5903 11.6686V8.30643H8.17455V11.6686H16.5903Z'
							fill='white'
						/>
						<path
							d='M26.6893 8.30643H23.323V33.5227H26.6893V8.30643Z'
							fill='white'
						/>
						<path
							d='M8.17432 30.1608V33.523H26.689V30.1608H8.17432Z'
							fill='white'
						/>
						<path
							d='M8.17432 35.2041V38.5663H36.788V35.2041H8.17432Z'
							fill='white'
						/>
						<path
							d='M6.49058 3.26462H3.12427V43.6107H6.49058V3.26462Z'
							fill='white'
						/>
						<path
							d='M41.8375 3.26337H38.4712V43.6094H41.8375V3.26337Z'
							fill='white'
						/>
						<path
							d='M3.125 3.26332V6.62549L41.8376 6.62549V3.26332L3.125 3.26332Z'
							fill='white'
						/>
						<path
							d='M3.125 40.2474V43.6096H40.1545V40.2474H3.125Z'
							fill='white'
						/>
						<path
							d='M33.4218 16.7121V30.1608H31.7386V16.7121H33.4218ZM36.7881 13.3499H28.3723V33.523H36.7881V13.3499Z'
							fill='white'
						/>
						<path
							d='M26.6893 30.1609C26.2429 30.1609 25.8148 29.9838 25.4991 29.6685C25.1835 29.3533 25.0062 28.9257 25.0062 28.4798C25.0072 29.1892 24.8577 29.8907 24.5676 30.5381C24.2775 31.1856 23.8533 31.7643 23.323 32.2361C24.2469 33.0666 25.4464 33.5252 26.6893 33.5231H33.4219L31.7388 30.1609H26.6893Z'
							fill='white'
						/>
						<path
							d='M58.2577 4.99067V12.0928H70.696V17.0835H58.2577V26.8729H52.0386V0H72.3468V4.99067H58.2577Z'
							fill='white'
						/>
						<path
							d='M93.1301 21.1144H80.6534L78.2732 26.8729H71.9005L83.8781 0H90.0205L102.036 26.8729H95.5102L93.1301 21.1144ZM91.1722 16.3924L86.9109 6.10398L82.6496 16.3924H91.1722Z'
							fill='white'
						/>
						<path
							d='M104.825 0H111.044V21.8054H124.519V26.8729H104.825V0Z'
							fill='white'
						/>
						<path
							d='M145.916 21.1144H133.439L131.059 26.8729H124.686L136.664 0H142.806L154.822 26.8729H148.296L145.916 21.1144ZM143.958 16.3924L139.697 6.10398L135.436 16.3924H143.958Z'
							fill='white'
						/>
						<path
							d='M182.257 0V26.8729H176.038V15.855H163.83V26.8729H157.611V0H163.83V10.5956H176.038V0H182.257Z'
							fill='white'
						/>
						<path
							d='M52 30.0295H55.5918V45.7308H52V30.0295Z'
							fill='white'
						/>
						<path
							d='M73.5095 30.0295V45.7308H70.5606L62.8226 36.1978V45.7308H59.2751V30.0295H62.2462L69.962 39.5624V30.0295H73.5095Z'
							fill='white'
						/>
						<path
							d='M92.0166 30.0295L85.2985 45.7308H81.751L75.0551 30.0295H78.9352L83.6578 41.2447L88.4469 30.0295H92.0166Z'
							fill='white'
						/>
						<path
							d='M105.33 42.8149V45.7308H93.3124V30.0295H105.041V32.9454H96.8821V36.3549H104.088V39.1811H96.8821V42.8149H105.33Z'
							fill='white'
						/>
						<path
							d='M113.287 46C112.06 46 110.87 45.8355 109.717 45.5065C108.579 45.1626 107.663 44.7215 106.968 44.1831L108.187 41.4466C108.853 41.9401 109.643 42.3363 110.56 42.6354C111.476 42.9345 112.393 43.084 113.309 43.084C114.329 43.084 115.083 42.9345 115.571 42.6354C116.058 42.3214 116.302 41.9102 116.302 41.4017C116.302 41.0279 116.155 40.7213 115.859 40.4821C115.578 40.2279 115.209 40.026 114.75 39.8765C114.307 39.7269 113.701 39.5624 112.932 39.383C111.75 39.0989 110.782 38.8147 110.028 38.5306C109.274 38.2465 108.624 37.7904 108.077 37.1624C107.544 36.5343 107.278 35.6969 107.278 34.6501C107.278 33.738 107.522 32.9155 108.01 32.1828C108.498 31.4351 109.23 30.8444 110.205 30.4108C111.195 29.9771 112.4 29.7603 113.819 29.7603C114.809 29.7603 115.778 29.8799 116.724 30.1192C117.67 30.3584 118.497 30.7024 119.207 31.151L118.098 33.9099C116.665 33.0875 115.231 32.6763 113.797 32.6763C112.792 32.6763 112.045 32.8407 111.558 33.1697C111.085 33.4987 110.848 33.9324 110.848 34.4707C110.848 35.009 111.122 35.4128 111.668 35.6819C112.23 35.9362 113.08 36.1904 114.218 36.4446C115.401 36.7287 116.369 37.0128 117.123 37.2969C117.877 37.5811 118.52 38.0297 119.052 38.6428C119.599 39.2559 119.872 40.0858 119.872 41.1326C119.872 42.0298 119.621 42.8522 119.118 43.5999C118.63 44.3327 117.891 44.9158 116.901 45.3495C115.911 45.7832 114.706 46 113.287 46Z'
							fill='white'
						/>
						<path
							d='M125.325 32.9903H120.358V30.0295H133.883V32.9903H128.917V45.7308H125.325V32.9903Z'
							fill='white'
						/>
						<path
							d='M143.115 46C141.504 46 140.048 45.6486 138.748 44.9458C137.462 44.2429 136.449 43.2784 135.71 42.0522C134.986 40.8111 134.624 39.4204 134.624 37.8801C134.624 36.3399 134.986 34.9567 135.71 33.7305C136.449 32.4893 137.462 31.5173 138.748 30.8145C140.048 30.1117 141.504 29.7603 143.115 29.7603C144.727 29.7603 146.175 30.1117 147.461 30.8145C148.747 31.5173 149.76 32.4893 150.499 33.7305C151.238 34.9567 151.607 36.3399 151.607 37.8801C151.607 39.4204 151.238 40.8111 150.499 42.0522C149.76 43.2784 148.747 44.2429 147.461 44.9458C146.175 45.6486 144.727 46 143.115 46ZM143.115 42.9046C144.032 42.9046 144.86 42.6952 145.599 42.2765C146.338 41.8429 146.914 41.2447 147.328 40.4821C147.757 39.7194 147.971 38.8521 147.971 37.8801C147.971 36.9081 147.757 36.0408 147.328 35.2782C146.914 34.5156 146.338 33.9249 145.599 33.5062C144.86 33.0725 144.032 32.8557 143.115 32.8557C142.199 32.8557 141.371 33.0725 140.632 33.5062C139.893 33.9249 139.309 34.5156 138.881 35.2782C138.467 36.0408 138.26 36.9081 138.26 37.8801C138.26 38.8521 138.467 39.7194 138.881 40.4821C139.309 41.2447 139.893 41.8429 140.632 42.2765C141.371 42.6952 142.199 42.9046 143.115 42.9046Z'
							fill='white'
						/>
						<path
							d='M164.195 45.7308L161.202 41.3569H157.899V45.7308H154.307V30.0295H161.025C162.399 30.0295 163.589 30.2612 164.594 30.7248C165.614 31.1884 166.398 31.8463 166.945 32.6987C167.492 33.551 167.765 34.5604 167.765 35.7268C167.765 36.8932 167.484 37.9026 166.922 38.7549C166.376 39.5923 165.592 40.2353 164.572 40.684L168.053 45.7308H164.195ZM164.129 35.7268C164.129 34.8445 163.848 34.1716 163.286 33.7081C162.725 33.2295 161.904 32.9903 160.825 32.9903H157.899V38.4633H160.825C161.904 38.4633 162.725 38.2241 163.286 37.7456C163.848 37.267 164.129 36.5941 164.129 35.7268Z'
							fill='white'
						/>
						<path
							d='M175.71 46C174.483 46 173.294 45.8355 172.141 45.5065C171.002 45.1626 170.086 44.7215 169.391 44.1831L170.611 41.4466C171.276 41.9401 172.067 42.3363 172.983 42.6354C173.9 42.9345 174.816 43.084 175.732 43.084C176.752 43.084 177.506 42.9345 177.994 42.6354C178.482 42.3214 178.726 41.9102 178.726 41.4017C178.726 41.0279 178.578 40.7213 178.282 40.4821C178.001 40.2279 177.632 40.026 177.174 39.8765C176.73 39.7269 176.124 39.5624 175.356 39.383C174.173 39.0989 173.205 38.8147 172.451 38.5306C171.697 38.2465 171.047 37.7904 170.5 37.1624C169.968 36.5343 169.702 35.6969 169.702 34.6501C169.702 33.738 169.946 32.9155 170.433 32.1828C170.921 31.4351 171.653 30.8444 172.628 30.4108C173.619 29.9771 174.823 29.7603 176.242 29.7603C177.233 29.7603 178.201 29.8799 179.147 30.1192C180.093 30.3584 180.921 30.7024 181.63 31.151L180.522 33.9099C179.088 33.0875 177.654 32.6763 176.22 32.6763C175.215 32.6763 174.469 32.8407 173.981 33.1697C173.508 33.4987 173.271 33.9324 173.271 34.4707C173.271 35.009 173.545 35.4128 174.092 35.6819C174.653 35.9362 175.503 36.1904 176.642 36.4446C177.824 36.7287 178.792 37.0128 179.546 37.2969C180.3 37.5811 180.943 38.0297 181.475 38.6428C182.022 39.2559 182.295 40.0858 182.295 41.1326C182.295 42.0298 182.044 42.8522 181.542 43.5999C181.054 44.3327 180.315 44.9158 179.324 45.3495C178.334 45.7832 177.129 46 175.71 46Z'
							fill='white'
						/>
					</svg>
				</div>
				<nav className='header__menu menu'>
					<ul class='menu__list'>
						<li>
							<a href='#about'>{t('mainMenu.about')}</a>
						</li>
						<li>
							<a href='#partners'>{t('mainMenu.partners')}</a>
						</li>
						<li>
							<a href='#projects'>{t('mainMenu.projects')}</a>
						</li>
						<li>
							<a href='#contacts'>{t('mainMenu.contacts')}</a>
						</li>
					</ul>
					<div ref={ref}>
						<div className='header__actions action'>
							<button
								className='action__btn'
								onClick={() => setIsComponentVisible(true)}
							>
								<span></span>
								{i18next.language === 'uz' && <>O'zb</>}
								{i18next.language === 'ru' && <>Рус</>}
								{i18next.language === 'en' && <>Eng</>}
							</button>
							<ul className={isComponentVisible ? '_active' : ''}>
								{languages.map(
									({ code, name, country_code }) => {
										return (
											<li key={country_code}>
												<button
													className='action__item'
													onClick={() => {
														i18next.changeLanguage(
															code
														);
														setIsComponentVisible(
															false
														);
													}}
												>
													<span
														className={`icon icon-${country_code}`}
													></span>
													{name}
												</button>
											</li>
										);
									}
								)}
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Header;
