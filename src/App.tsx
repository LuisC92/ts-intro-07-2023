import './App.css'
import {Routes, Route} from "react-router-dom"
import Landing from './pages/Landing'
import PostList from './pages/PostList'
import About from './pages/About'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar />
     <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/posts' element={<PostList />} />
        <Route path='/about' element={<About />} />
     </Routes>
    </>
  )
}

export default App
