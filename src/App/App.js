import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MissionSection from './components/MissionSection';
import FeaturesSection from './components/FeaturesSection';
import ProjectsSection from './components/ProjectsSection';
import SubscribeSection from './components/SubscribeSection';
import MediaSection from './components/MediaSection';
import FooterSection from './components/FooterSection';
import AOS from 'aos';
import './scss/App.scss';
import 'aos/dist/aos.css';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`wrapper ${isOpen ? 'isOpen' : ''}`}>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar isOpen={isOpen} toggle={toggle} />
			<main className='main'>
				<HeroSection />
				<AboutSection />
				<MissionSection />
				<FeaturesSection />
				<ProjectsSection />
				<SubscribeSection />
				<MediaSection />
			</main>
			<FooterSection />
		</div>
	);
}

export default App;
