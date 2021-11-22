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
			</div>
		</aside>
	);
};

export default Sidebar;
