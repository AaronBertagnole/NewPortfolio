import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import img1 from '../assets/images/Image.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';

const About = () => {
  return (
    <div className=' container text-center mt-5'>
      <h1>About US</h1>
      <br />
      <section>
        <p className='text-center '>
          ed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
      </section>
      <section className='col-4 align-content-md-around float-left '>
        <Card className='bg-dark text-light' style={{ width: '18rem' }}>
          <Card.Img variant='top' height='250px' src={img1} />
          <Card.Body>
            <Card.Title className='bg-dark text-light'>Card Title</Card.Title>
            <Card.Text className='bg-dark text-light'>
              ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam,
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
            <Card.Title className='bg-dark text-light'>Card Title</Card.Title>
            <Card.Text className='bg-dark text-light'>
              ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam,
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
          <Card.Img variant='top' height='250px' src={img3} />
          <Card.Body>
            <Card.Title className='bg-dark text-light'>Card Title</Card.Title>
            <Card.Text className='bg-dark text-light'>
              ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam,
            </Card.Text>
            <Button variant='info'>
              <a href='https://www.facebook.com/'>Learn More</a>
            </Button>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default About;
