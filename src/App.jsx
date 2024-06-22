
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'



import Layout from './pages/Layout'
import NoNot from './pages/NoNot'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
          </Route>
          <Route path="*" element={<NoNot />} />
        </Routes> 
      </Router>
    </>
  )
}

export default App
