import React, { useState, useEffect, useRef } from 'react';
import i18next from 'i18next';
import './Language.scss';

const languages = [
	{
		code: 'en',
		name: 'English',
		country_code: 'gb',
	},
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

const Language = () => {
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(false);

	return (
		<div
			className={`language ${isComponentVisible ? '_active' : ''}`}
			ref={ref}
		>
			<button
				className='language__btn'
				onClick={() => setIsComponentVisible(!isComponentVisible)}
			>
				{i18next.language}
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M12.6666 6L7.99998 10.6667L3.33331 6'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</button>
			<ul className={isComponentVisible ? '_active' : ''}>
				{languages.map(({ code, name, country_code }) => {
					return (
						<li key={country_code}>
							<button
								className='language__item'
								onClick={() => {
									i18next.changeLanguage(code);
									setIsComponentVisible(false);
								}}
							>
								<span
									className={`icon icon-${country_code}`}
								></span>
								{name}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Language;
