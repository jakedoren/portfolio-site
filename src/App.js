import './App.css';
import Navbar from './components/navbar/Navbar'
import Body from './components/body/Body'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (

      <div> 

        <Navbar />
        <Body />
        <About />
        <Projects />
        <Contact />
        <Footer />
        
      </div>
    
  );
}

export default App;
