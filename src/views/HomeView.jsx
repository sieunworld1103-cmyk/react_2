import React from 'react'
import Skip from '../components/Skip'
import Header from '../components/Header'
import Main from '../components/Main'
import Intro from '../components/Intro'
import Footer from '../components/Footer'
import Skill from '../components/Skill'
import Site from '../components/Site'
import Port from '../components/Port'

const HomeView = () => {
  return (
    <>
        <Skip />
        <Header />
        <Main />
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Footer />
    </>
  )
}

export default HomeView