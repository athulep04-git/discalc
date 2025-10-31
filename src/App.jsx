import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import LandingPage from "./pages/LandingPage"
import Pagenotfound from "./pages/Pagenotfound"
import Calculator from "./pages/Calculator"
import AllMovies from "./pages/AllMovies"
import Movie from "./pages/Movie"


function App() {


  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/discount"element={<Calculator/>}/>
          <Route path="/movies" element={<AllMovies/>}/>
          <Route path="/movie" element={<Movie/>}/>
          <Route path="*" element={<Pagenotfound/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
