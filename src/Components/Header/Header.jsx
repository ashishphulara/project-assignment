import React from 'react'
import "./Header.css"
import Logo from "../../Assets/download.png"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{border:"2px solid black" , height:"15vh"}}>
        <a className="navbar-brand" href="/">
      <img src={Logo} alt="Avatar Logo"className="rounded-pill"/> 
    </a>
  <div className="container-fluid" style={{marginLeft:"40%",justifyContent:"space-between 5px" , fontSize:"20px" }}>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <div className="dropdown">
  <button className="dropbtn">Home</button>
  <div className="dropdown-content" style={{backgroundColor:"white"}} >
    <a href="/">Link 1</a>
    <a href="/">Link 2</a>
    <a href="/">Link 3</a>
  </div>
</div>
        <div className="dropdown" >
  <button className="dropbtn">Pages</button>
  <div className="dropdown-content" style={{backgroundColor:"white"}}>
    <a href="/">Link 1</a>
    <a href="/">Link 2</a>
    <a href="/">Link 3</a>
  </div>
</div>
        <div className="dropdown">
  <button className="dropbtn">Courses</button>
  <div className="dropdown-content" style={{backgroundColor:"white"}}>
    <a href="/">Link 1</a>
    <a href="/">Link 2</a>
    <a href="/">Link 3</a>
  </div>
</div>
        <div className="dropdown">
  <button className="dropbtn">Blog</button>
  <div className="dropdown-content" style={{backgroundColor:"white"}}>
    <a href="/">Link 1</a>
    <a href="/">Link 2</a>
    <a href="/">Link 3</a>
  </div>
</div>
      
        <li className="dropbtn">
          <a className="nav-link active" aria-current="page" href="/">Contact</a>
        </li>

        <form className="d-flex" style={{marginTop:"2%"}}>
        <input className="form-control me-2" type="text" placeholder="Search" style={{border:"none" , backgroundColor:"lightgrey" ,height:"5vh"}}/>
        <button className="btn btn-primary" type="button"  style={{marginRight:"10%" , height:"5vh" }}><i className="fa-solid fa-magnifying-glass"   ></i></button>
      </form>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header
