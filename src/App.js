import './App.css';
import Navbar from './components/navbar/Navbar'
import Body from './components/body/Body'
import About from './components/About/About'
import Projectsection from './components/projectsection/Projectsection'

import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (

      <div> 

        <Navbar />
        <Body />
        <About />
        <Projectsection />
        <Contact />
        <Footer />
        
      </div>
    
  );
}

export default App;
