import React, { useEffect, useState } from 'react'

import { Link as ScrollLink } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { content } from '../content'

const Header = () => {
  const [animated, setAnimated] = useState(false)

  useEffect(()=>{
    setAnimated(true)
  },[setAnimated])

  return(
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor:"#1d1c1b"}}>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-10/12 mx-auto">
        <div className="text-center text-blue-500 md:text-left mt-3">
          <span 
            className={`${animated ? '' : 'translate-y-10 opacity-0'} tranform transition duration-2000 ease-in-out text-3xl md:text-5xl`}
          >
            {content.header.texts[0]}<br/>
          </span>
          <span 
            className={`${animated ? '' : 'translate-y-10 opacity-0'} tranform transition duration-2000 ease-in-out md:text-3xl`}
          >
            {content.header.texts[1]}<br/>
          </span>
          
          <TypeAnimation
            sequence={content.header.typicalSteps}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="inline-block text-2xl text-green-600 my-2"
          />
          <br/>
          <ScrollLink to='stack' smooth={true}>
            <button className="animate-float bg-green-600 my-3 py-2 rounded px-10 text-white">Discover More</button>
          </ScrollLink>
        </div>
        <div>
          <div>
            <LazyLoadImage width="418px" style={{overflow: 'hidden'}} src={content.header.bgImg.src} alt="bg-img" effect="blur"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header