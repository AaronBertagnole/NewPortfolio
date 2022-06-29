import React from 'react';
import MeImg from '../assets/images/MeImg.jpeg'
import Footer from '../components/Footer'
import style from '../App.css'

const home = () => {
  return (
		<div >
			<h1>Aaron Bertagnole</h1>
			<h6 className='text-center'>
				<img alt={'Me'} src={MeImg} height={'250px'}></img>
			</h6>
			<h2 className='text-dark text-center'>
				Started from the bottom now we here.
			</h2>
			<Footer className='footer' />
		</div>
	);
};

export default home;
