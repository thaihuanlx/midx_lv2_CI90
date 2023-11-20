import { useState } from 'react'
import './App.css'
import Leadform from "./Components/Leadform";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Background from "./Components/Background";
import FooterMid from "./Components/FooterMid";
import FooterBottom from "./Components/FooterBottom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Background />
      <Leadform />
      <Footer />
      <FooterMid />
      <FooterBottom />
    </div>
  )
}

export default App
