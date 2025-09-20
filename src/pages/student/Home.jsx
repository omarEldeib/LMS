import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import Testimonials from '../../components/student/Testimonials'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-10'>
      <Hero/>
      <Companies/>
      <CoursesSection/>
      <Testimonials/>
      <CallToAction/>
    </div>
  )
}

export default Home
