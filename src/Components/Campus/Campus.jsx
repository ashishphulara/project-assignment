import React from 'react'
import campus from "../../Assets/campus-main.png";
import underline from "../../Assets/underline1.png";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Campus = () => {
  return (
    <div className='campus-container' style={{background:"RGB(244, 244, 245)" , marginTop:"9%"}}>
      <div className='academics-heading'>

<div  style={{fontStyle:"Poltawski Nowy" , fontSize:"50px" , fontWeight:"bolder",color:"RGB(1, 49, 110)" , marginTop:"3%" , }}>Campus Life</div>
<img src={underline} alt='underline'/>
</div>
<div className='campus-card'>
<Card body style={{width:"45%"}}>
    <div style={{fontWeight:"bolder" , fontSize:"25px" ,color:"RGB(1, 49, 111)" }}>
    Do More, Stress Less
    </div>
    <div style={{fontWeight:"bolder" , fontSize:"25px" ,color:"RGB(168, 202, 216)"}}>
    Why I say old chap that is spiffing he legged
    </div>
    <div style={{fontWeight:"bolder" , fontSize:"25px" ,color:"RGB(168, 202, 216)"}}>
    it in my flat easy peasy.
    </div>
    <hr></hr>
    <div style={{fontWeight:"bolder" , fontSize:"25px" ,color:"RGB(1, 49, 111)" }}>
    The Business Intelligence
    </div>
    <div style={{fontWeight:"bolder" , fontSize:"25px" ,color:"RGB(168, 202, 216)"}}>
    Why I say old chap that is spiffing he legged
    </div>
    <div style={{fontWeight:"bolder" , fontSize:"25px" ,color:"RGB(168, 202, 216)"}}>
    it in my flat easy peasy.
    </div>
    <hr></hr>
    <div style={{fontWeight:"bolder" , fontSize:"25px" ,color:"RGB(1, 49, 111)" }}>
    System Administration
    
    <div style={{fontWeight:"bolder" , fontSize:"25px" ,color:"RGB(168, 202, 216)"}}>
    Why I say old chap that is spiffing he legged
    </div>
    <div style={{fontWeight:"bolder" , fontSize:"25px" ,color:"RGB(168, 202, 216)"}}>
    it in my flat easy peasy.
    </div>
    </div>
    </Card>
<Card body>
    <img  src={campus} alt=''/>
 
    </Card>

    <Button variant="outline-danger" style={{borderColor:"RGB(20, 68, 142)", color:"RGB(20, 68, 142)", position:"relative" , left:"-45%" ,marginTop:"50%" , width:"20%" , height:"10vh" , marginBottom:"5%" , fontSize:"20px" , fontWeight:"bold"}}>More About Campus Life</Button>{' '}
</div>
    </div>
  )
}

export default Campus