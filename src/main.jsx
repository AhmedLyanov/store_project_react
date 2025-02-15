import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header'
import Carousel from './components/sliderHeader'

const props = {

  style: {
    width: "100%",
    background: "linear-gradient(90.7deg, #211C24 0.64%, #211C24 101%)",
    width: "100%",
    height: "100%",
    height: "732px",
    objectFit: 'cover',
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Carousel props={props}/>
  </StrictMode>,
)
