import './App.css'
import Hero from './components/Hero'
import ProjectsGrid from './components/ProjectsGrid'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero
        name="Nithin"
        tagline="Building things and breaking things, in that order"
        githubUrl="https://github.com/nithinu08"
        linkedinUrl="https://www.linkedin.com/in/nithin-upadhyaya-19a808208/"
      />
      <ProjectsGrid />
      <About />
      <Footer />
    </div>
  )
}

export default App