import React from 'react'
import Contact from './Contact'
import Header from './Header'
import Navigation from './Navigation'
import Stack from './Stack'
import WorkTimeline from './Work-Timeline'

const Home = () => {
  return(
    <>
      <Navigation/>
      <Header/>
      <Stack/>
      <WorkTimeline/>
      <Contact/>
    </>
  )
}

export default Home