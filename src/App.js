import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Search from './pages/Search'
import Album from './pages/Album'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'
import ProfileEdit from './pages/ProfileEdit'
import NotFound from './pages/NotFound'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/album/:id" element={<Album/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profile/edit" element={<ProfileEdit/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
