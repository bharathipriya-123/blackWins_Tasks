import React from 'react'
import { Search } from 'lucide-react';
import './Hero.css'

export default function Hero() {
  return (
    <div className='titlebody'>
      <h1>Your ultimate job <br></br>
        search companion</h1>
      <h3>Are you looking for the perfect job or the ideal candidate?Find your dream job</h3 >
       <h3 className='h31'>with thousands of job posting across india</h3>
      
      <div className='search'>
         <Search/>   <input  placeholder='   job title'></input><button className='searchBtn'>search</button>
      </div>
      {/* <div className='imge'>
      
      <p>10,000+ jobs</p><img src='https://jobboard-template.vercel.app/_next/image?url=%2FavatarGroup-1.png&w=48&q=75'  className='icon'></img>
      <img src='https://jobboard-template.vercel.app/_next/image?url=%2FavatarGroup-2.png&w=48&q=75' className='icon'></img>
      <img src='https://jobboard-template.vercel.app/_next/image?url=%2FavatarGroup-3.png&w=48&q=75' className='icon'></img>
      <img src='https://jobboard-template.vercel.app/_next/image?url=%2FavatarGroup-4.png&w=48&q=75' className='icon'></img>
      <img src='https://jobboard-template.vercel.app/_next/image?url=%2FavatarGroup-5.png&w=48&q=75' className='icon'></img>
      </div> */}





    </div>
  )
}
