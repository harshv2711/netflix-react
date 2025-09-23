import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroVideoPlayer from "./components/HeroVideoPlayer"
import MySwiper from "./components/MySwiper"
import CollectionWrapper from './components/CollectionWrapper'

function App() {
  return <> 
    <Navbar/>
    <HeroVideoPlayer/>
    <CollectionWrapper/>
  </>
}

export default App
