import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Portfolio from './Components/Portfolio/Portfolio';
import Service from './Components/Service/Service';
import Testimonial from './Components/Testimonial/Testimonial';
import './index.css';


function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Service/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
    </>
  )
}

export default App
