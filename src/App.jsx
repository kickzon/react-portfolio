import './App.css'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="home">
          <h1>Chiara Jukkola</h1>
          <p>Min portfolio kommer snart.</p>
        </section>

        <section id="about" aria-label="Om mig" />
        <section id="projects" aria-label="Projekt" />
        <section id="contact" aria-label="Kontakt" />
      </main>
    </>
  )
}

export default App
