
import React from 'react';
import './Header.css';
import { PaintBucket } from 'lucide-react';

const Header = () => {
  return (
   
    <header className='header'>
     <nav>
        
     <img src="https://jobboard-template.vercel.app/_next/image?url=%2FLogo.png&w=256&q=75" className='title'></img>
        <ul className='list'>
          <li><a class="active" href="#">Home</a></li>
          <li><a  class="active" href="#">About</a></li>
          <li><a class="active" href="#">jobs</a></li>
          <li><a class="active" href="#">Subscribe</a></li>
          <li className='button1'><PaintBucket/><button id="login"><a href="#">post a Job</a></button></li>
      
          
        </ul>
      </nav>
      </header>
    
  );
};

export default Header;

