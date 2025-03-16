import React from 'react'
import Home from '../components/Home/Home'
import Recipe from '../components/Recipe/Recipe'
import Popular from '../components/Popular/Popular'
import Delivery from '../components/Delivery/Delivery'
import Contact from '../components/Contact/Contact'

const RootPage = () => {
  return (
    <main className='main' id='main'>
        <Home/>
        <Recipe/>
        <Popular/>
        <Delivery/>
        <Contact/>
    </main>
  )
}

export default RootPage