import Hero from "./Components/Hero";
// import Footer from "./Components/Footer";
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import Register from "./Components/Register";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Navbar2 from "./Components/Navbar2";
import PreferenceForm from "./Components/PreferenceForm";

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
        <Route path={'/Dashboard'} element={

          <>
            <Navbar2/>
            <Footer />
          </>
        } />
        <Route path={'/preferenceForm'} element={

          <>
            <Navbar2/>
            <PreferenceForm/>
            <Footer />
          </>
        } />
        <Route path={'/AboutUs'} element={
          <>
            <Navbar />
            <AboutUs />
            <Footer />
          </>
        } />
        <Route path={'/contact'} element={
          <>
            <Navbar />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>

    </>
  );
}

export default App;
