
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Tech from "./components/Tech"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {


  return (

    <>


    
      <div className="fixed -z-10 min-h-screen h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>
     <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
       
        <Navbar />
        <Hero />
        <Tech />
        <Projects/>
        <Contact/>
      </main>
      </>



  )
}

export default App
