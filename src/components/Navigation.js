import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { content } from '../content'

const Navigation = () => {
  return(
    <div className="bg-gray-900">
      <div className="flex justify-between w-10/12 mx-auto items-center py-3">
        <div className="rounded-full flex justify-center items-center ring-1 px-[.4rem] py-[.3rem] text-green-500">
          AK
        </div>
        <div>
          {
            content.nav.links.map(link=> <ScrollLink to={link.to} key={link.to} smooth={true} className="text-xl mx-2 md:mx-5 text-blue-500 cursor-pointer">{link.text}</ScrollLink>)
          }
        </div>
      </div>
    </div>
  )
}

export default Navigation