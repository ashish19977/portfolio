import React from 'react'
import { content } from '../content'
import ProjectCard from './Project-Card'


export default function WorkTimeline() {
return(
  <div className="bg-black py-2 text-gray-400 px-1" id="work">
    <h1 className="md:text-5xl text-3xl font-mono text-green-600 mt-5 mb-8 text-center">Works and Projects</h1>

    <div className='mb-7 mt-3 md:w-10/12 mx-auto'>
      {
        content.work.map(work => 
        <div className='flex items-center md:justify-start justify-between px-1' key={work.date}>
          <span className={work.isCurrent ? 'text-green-600' : ''}>{work.date}</span> 
          <span className='mx-3'>{work.postion}</span>
          <a href={work.link}><span className="text-blue-500 underline text-sm">@{work.company}</span></a>
        </div>            
        )
      }
    </div>

    <div className="md:w-10/12 mx-auto min-h-screen flex my-5 md:my-3 flex-wrap justify-center items-center">
      {
        content.projects.map(project => 
        <ProjectCard
          key={project.name}
          name={project.name} 
          link={project.link} 
          date={project.date} 
          techUsed={project.techUsed}
          keyPoints={project.keyPoints}
        />
        )
      }
    </div>
  </div>
)
}