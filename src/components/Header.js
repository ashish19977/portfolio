import React from 'react'

import { Link as ScrollLink } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation';
import 'react-lazy-load-image-component/src/effects/blur.css'
import { content } from '../content'

const Header = () => {

  return(
    <div className="flex items-center items-start md:pt-2 justify-center bg-black">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-10/12 mx-auto">
        <div className="text-blue-500 text-left py-8 md:py-32 md:max-w-5xl">
          <span className='text-3xl md:text-6xl'>
            {content.header.texts[0]}<br/>
          </span>
          <span className='md:text-4xl'>
            {content.header.texts[1]}<br/>
          </span>

          <span className='md:text-sm text-gray-500 text-xs'>
            {content.header.about}<br/>
          </span>
          
          <TypeAnimation
            sequence={content.header.typicalSteps}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="inline-block text-3xl text-green-600 my-2"
          />
          <br/>
          <ScrollLink to='stack' smooth={true}>
            <button className="animate-float bg-green-600 my-3 py-2 rounded px-10 text-white">Discover More</button>
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}

export default Header