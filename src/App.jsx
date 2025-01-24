import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  )
}

export default App
