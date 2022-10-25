import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { content } from '../content'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Stack = () => {
  return(
    <div className='bg-gray-200'>
      <div className="md:h-96 py-3 h-auto flex flex-col items-center justify-center w-10/12 mx-auto" id="stack">
        <h1 className="md:text-5xl text-3xl font-mono text-green-600 my-5">Stack I Use</h1>
        <div className="flex flex-wrap justify-center">
          {
            content.stack.map(
              (stack, index) =>
              <span className="w-50 h-50 md:h-40 md:w-40 flex items-center p-2" key={stack.alt}>
                <LazyLoadImage src={stack.src} alt={stack.alt} key={index} effect="blur" className={(index % 2 === 1 ? 'animate-float' : 'animate-refloat') + ' rounded-full shadow-2xl'}/>
              </span>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Stack