import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section id="about" aria-label="Om mig" />
        <section id="projects" aria-label="Projekt" />
        <section id="contact" aria-label="Kontakt" />
      </main>
    </>
  )
}

export default App
