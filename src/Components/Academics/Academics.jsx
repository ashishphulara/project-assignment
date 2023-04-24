import React from 'react'
import underline from "../../Assets/underline1.png";
import Card from 'react-bootstrap/Card';
import img1 from "../../Assets/img1.png"
import img2 from "../../Assets/img2.png"
import img3 from "../../Assets/img3.png"
import img4 from "../../Assets/img4.png"
import { Link } from 'react-router-dom';
import campusImg from "../../Assets/campus-img.png";
import Button from 'react-bootstrap/Button';
import callImg from "../../Assets/callimg.png"

const Academics = () => {
  return (
    <div className='academics-container'>

    <div className='academics-heading'>

        <div  style={{fontStyle:"Poltawski Nowy" , fontSize:"50px" , fontWeight:"bolder",color:"RGB(1, 49, 110)" , marginTop:"5%"}}>Academics</div>
        <img src={underline} alt='underline'/>
    </div>
    <div className='academics-card' >


    <Card className="bg-dark text-white" style={{width:"20%"}}>
      <Card.Img src={img1} alt="Card image" />
      <Card.ImgOverlay style={{marginTop:"57%"}}>
        <Card.Title style={{fontWeight:"bolder",fontSize:"30px"}}>Let's Talk Science</Card.Title>
        <Card.Text><Link href='#' style={{color:"white" , fontSize:"20px",fontWeight:"bold"}}>Learn more..<i class="fa-thin fa-arrow-right"></i></Link></Card.Text>
      </Card.ImgOverlay>
    </Card>

    <Card className="bg-dark text-white"style={{width:"20%"}}>
      <Card.Img src={img2} alt="Card image" />
      <Card.ImgOverlay style={{marginTop:"57%"}}>
        <Card.Title style={{fontWeight:"bolder",fontSize:"30px"}}>image
Innovative Courses</Card.Title>
        <Card.Text><Link href='#' style={{color:"white" , fontSize:"20px",fontWeight:"bold"}}>Learn more..<i class="fa-thin fa-arrow-right"></i></Link></Card.Text>
      </Card.ImgOverlay>
    </Card>

    <Card className="bg-dark text-white"style={{width:"20%"}}>
      <Card.Img src={img3} alt="Card image" />
      <Card.ImgOverlay style={{marginTop:"57%"}}>
        <Card.Title style={{fontWeight:"bolder",fontSize:"30px"}}>image
Cloud Storage</Card.Title>
        <Card.Text><Link href='#' style={{color:"white" , fontSize:"20px",fontWeight:"bold"}}>Learn more..<i class="fa-thin fa-arrow-right"></i></Link></Card.Text>
      </Card.ImgOverlay>
    </Card>

    <Card className="bg-dark text-white" style={{width:"20%"}}>
      <Card.Img src={img4} alt="Card image" />
      <Card.ImgOverlay style={{marginTop:"57%"}}>
        <Card.Title style={{fontWeight:"bolder",fontSize:"30px"}}>image
Online Education</Card.Title>
        <Card.Text><Link href='#' style={{color:"white" , fontSize:"20px",fontWeight:"bold"}}>Learn more..<i class="fa-thin fa-arrow-right"></i></Link></Card.Text>
      </Card.ImgOverlay>
    </Card>
   
    </div>
    <div className='campus-container' >
        <section>

        <img src={campusImg} alt='' style={{marginTop:"10%", marginLeft:"10%"}}/>
        </section>
        <section style={{position:"absolute", left:"60%" , marginTop:"-35%"}}>
            <span style={{color:"RGB(0, 48, 110)" ,fontSize:"60px" , fontWeight:"bolder", lineHeight:"70px"}} >
           Welcome to
            </span>
        <section style={{color:"RGB(210, 8, 60)",fontSize:"60px" , fontWeight:"bolder", lineHeight:"70px"}}>
        Echooling LMS 
        </section>
        <section style={{color:"RGB(210, 8, 60)" ,fontSize:"60px" , fontWeight:"bolder", lineHeight:"70px"}}>
         Platform
        </section>

        <section style={{color:"RGB(118, 135, 173)" ,fontSize:"23px" ,fontWeight:"5px"}}>
        Education is both the act of teaching knowledge to others
        </section>
        <section style={{color:"RGB(118, 135, 173)" ,fontSize:"23px" ,fontWeight:"5px"}}>
        and
        </section>
        <section style={{color:"RGB(118, 135, 173)" ,fontSize:"23px" ,fontWeight:"5px"}}>
        the act of receiving knowledge from someone else.
        </section>
        <section style={{color:"RGB(118, 135, 173)" ,fontSize:"20px" ,fontWeight:"5px", marginTop:"30px"}}>
        Have questions?<span style={{color:"RGB(212, 63, 122)" , fontWeight:"bolder"}}>Get Free Guide</span>
        </section>
        <hr></hr>
        <div style={{marginTop:"10%"}}>

        <section style={{color:"RGB(118, 135, 173)" ,fontSize:"20px" ,fontWeight:"5px"}}>
        Education also refers to the knowledge received through schooling
        </section>
        <section style={{color:"RGB(118, 135, 173)" ,fontSize:"20px" ,fontWeight:"5px"}}>
        instruction
        </section>
        <section style={{color:"RGB(118, 135, 173)" ,fontSize:"20px" ,fontWeight:"5px"}}>
        and to the institution of teaching as a whole. The main purpose of
        </section>
        <section style={{color:"RGB(118, 135, 173)" ,fontSize:"20px" ,fontWeight:"5px"}}>
        education
        </section>
        <section style={{color:"RGB(118, 135, 173)" ,fontSize:"20px" ,fontWeight:"5px"}}>
        is the integral development of a person.
        </section>
        <Button variant="outline-danger" style={{borderColor:"RGB(20, 68, 142)", color:"RGB(20, 68, 142)"}}>Danger</Button>{' '}
        <span>
        <img src={callImg} alt=''/>
            <section style={{marginLeft:"28%", marginTop:"-7%" , fontSize:"20px"}}>
            Get Support
            </section>
            <section style={{marginLeft:"28%" , fontSize:"20px"}}>
           Support@react.com
            </section>
        </span>   
        </div>
        </section>
    </div>
    </div>

  )
}

export default Academics