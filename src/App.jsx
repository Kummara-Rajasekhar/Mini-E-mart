import React from 'react'
import './App.css'
import { Routes ,Route  } from 'react-router-dom'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import AcPage from './stores/pages/AcPage'
import ComputersPage from './stores/pages/ComputersPage'
import FridgePage from './stores/pages/FridgePage'
import KitchenPage from './stores/pages/KitchenPage'
import MenPage from './stores/pages/MenPage'
import SpeakersPage from './stores/pages/SpeakersPage'
import TvPage from './stores/pages/TvPage'
import WatchPage from './stores/pages/WatchePage'
import WomanPage from './stores/pages/WomanPage'
import FurniturePage from './stores/pages/FurniturePage'
import MobileSingle from './Singles/MobileSingle'
import UserCart from './stores/UserCart'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/mobiles' element={<MobilePage/>}/>
        <Route path='/ac' element={<AcPage/>}/>
        <Route path='/computers' element={<ComputersPage/>}/>
        <Route path='/fridges' element={<FridgePage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>}/>
        <Route path='/men' element={<MenPage/>}/>
        <Route path='/speakers' element={<SpeakersPage/>}/>
        <Route path='/tv' element={<TvPage/>}/>
        <Route path='/watch' element={<WatchPage/>}/>
        <Route path='/woman' element={<WomanPage/>}/>
        <Route path='/furniture' element={<FurniturePage/>}/>
        <Route path='/mobiles/:id' element={<MobileSingle/>}/>
        <Route path='/addtocart' element={<UserCart/>}/>
      </Routes>
    </div>
  )
}

export default App;