import React from 'react'
import { content } from '../content'

const ProjectCard = ({ name, link, date, techUsed, keyPoints }) =>{

  const openProject = () => window.location.href = link

  return(
    <div className="min-h-1/2 max-h-1/2 md:min-h-1/2 md:max-h-1/2 w-1/1 md:w-1/2 p-1 rounded">
      <div className="border border-blue-300 p-2 rounded transition duration-500 ease-in-out transform hover:scale-95">
        <div className="text-3xl mb-2 mt-1">{name}</div>
        <div className="text-xs text-white">
          {
            techUsed.map(tech =>
              <span key={tech} className="px-1 mx-1 rounded" style={{backgroundColor: content.projectColors[tech]}}>{tech}</span>  
            )
          }
        </div>

        <div className="text-white my-3">
          <span className="py-1 rounded-full">{date}</span>
        </div>
        
        <div className="mt-4">
          <p className="my-2 text-xl">Keypoints</p>
          <ul className="pl-5 text-sm md:base">
            {
              keyPoints.map(point =>
                <li className="py-1" key={point}>{point}</li>      
              )
            }
          </ul>
        </div>
        
        <button 
          style={{visibility: link ? 'visible' : 'hidden'}} 
          className="rounded px-2 bg-green-500 text-white mt-3 focus:scale-95"
          onClick={openProject}
        >
          Open project
        </button>

      </div>
    </div>
  )
}

export default ProjectCard
