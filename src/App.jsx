import Hero from "./Components/Hero";
// import Footer from "./Components/Footer";
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import Register from "./Components/Register";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route index element={
          <>
            <Navbar />
            <Hero />
            <Footer />
          </>

        } />
        <Route path={'/Login'} element={
          
          <>
        <Navbar />
        <Register />
        <Footer />
      </>
        } />
       <Route path={'/AboutUs'} element={
        <>
        <Navbar />
        <AboutUs/>
        <Footer />
      </>
       }/>  
       <Route path={'/contact'} element={
        <>
        <Navbar />
        <Contact/>
        <Footer />
      </>
       }/> 
      </Routes>

    </>
  );
}

export default App;
