
import React from 'react';
import './Style.css';


export default function Navbar() {
  return (
    <div>
        
        <nav class="navbar navbar-expand-sm  navbar-light fixed-top">
        <a class="navbar-brand" href="#">
        <img src="logo.webp"  />
  </a>

  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/Menu">Menu</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/Reservation">Reservation</a>
    </li>
  </ul>
  <div className='icon'>
  <a href="#"><i class="fa-brands fa-facebook-square m-4 "></i></a>
  <a href="#"><i class="fa-brands fa-instagram m-4"></i></a>
  <a href="#"><i class="fa-brands fa-youtube m-4"></i></a>
  <badge>
  <a href="/cart"><i class="fa-solid fa-cart-arrow-down"></i></a></badge>
  </div>
</nav>
    </div>
  )
}
