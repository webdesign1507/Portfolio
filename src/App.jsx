import About from './Component/About/About'
import Hero from './Component/Hero/Hero'
import Navbar from './Component/Navbar/Navbar'
import './App.css'
import Project from './Component/Project/Project'
import Contact from './Component/Contact/Contact'
import Footer from './Component/footer/Footer'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
	  </div>
  )

}
export default App
