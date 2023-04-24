import React from 'react';
import './Footer.css';
import { Card, CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Assets/download.png';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <CardGroup style={{ height: '60vh' }}>
        <Card style={{ borderColor: 'black' }}>
          <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
            <Card.Img variant='top' src={Logo} style={{ width: '60%' }} />
            <Card.Text style={{ fontSize: '20px' }}>
              This is a wider card with supporting
              <br />
              text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
            <FontAwesomeIcon icon={faPhone} style={{ color: '#eef1f6' }} />
            <span style={{marginLeft:"2%"}}>
              +21 987 666 999 554
            </span>
            <br/>
            <FontAwesomeIcon icon={faEnvelope}style={{color: "#ffffff",}} />
            <span style={{marginLeft:"2%"}}>React@gmail.com</span>
          </Card.Body>
        </Card>
        <Card style={{ borderColor: 'black' }}>
          <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ borderColor: 'black' }}>
          <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ borderColor: 'black' }}>
          <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Footer;
