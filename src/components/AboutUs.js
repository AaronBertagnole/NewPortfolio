import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import Footer from './Footer'



const About = () => {
  return (
		<div className=' container text-center mt-5 text-dark'>
			<h1>About Me</h1>
			<br />
			<section>
				<p className='text-center '>
					I originally hail from Casper, Wyoming. I then moved with my family at
					17 to Utah where I have lived since. Take a look some of the Projects
					I have worked on. Enjoy!
				</p>
			</section>
			<section className='col-4 align-content-md-around float-left '>
				<Card className='bg-dark text-light' style={{ width: '18rem' }}>
					<Card.Img variant='top' height='250px' src={img1} />
					<Card.Body>
						<Card.Title className='bg-dark text-light'>
							Pat Knows Best
						</Card.Title>
						<Card.Text className='bg-dark text-light'>
							Use Pat knows best, your new friend that you can ask all your game
							related questions to and he/she will always have a recommendation
							for you.
						</Card.Text>
						<Button variant='info'>
							<a href='https://www.facebook.com/'>Learn More</a>
						</Button>
					</Card.Body>
				</Card>
			</section>
			<section className='col-4 align-content-md-around float-left'>
				<Card
					className='bg-dark text-light float-left'
					style={{ width: '18rem' }}>
					<Card.Img variant='top' height='250px' src={img2} />
					<Card.Body>
						<Card.Title className='bg-dark text-light'>
							Food Truck Frenzy
						</Card.Title>
						<Card.Text className='bg-dark text-light'>
							A place for users to search for different food trucks, and a place
							for food truck owners to edit and post their menu, location, and
							prices.
						</Card.Text>
						<Button variant='info'>
							<a href='https://food-truck-frenzy.herokuapp.com/'>Learn More</a>
						</Button>
					</Card.Body>
				</Card>
			</section>
			<section className='col-4 align-content-md-around float-left'>
				<Card
					className='bg-dark text-light float-left'
					style={{ width: '18rem' }}>
					<Card.Img variant='top' height='250px' src={img3} />
					<Card.Body>
						<Card.Title className='bg-dark text-light'>
							Rockfish Conservation
						</Card.Title>
						<Card.Text className='bg-dark text-light'>
							Rockfish is a vulnerable fish family that is being overfished by
							commercial and game fishing, with several species on the
							endangered or threatened list.
						</Card.Text>
						<Button variant='info'>
							<a href='https://rockfish-conservation.herokuapp.com/'>
								Learn More
							</a>
						</Button>
					</Card.Body>
				</Card>
			
				<Footer />
			</section>
	
		</div>
	);
};

export default About;
