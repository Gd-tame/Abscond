import styled from "styled-components"
 import Navbar from "./Components/Navbar"
import Prizes from "./Components/Prizes"
import Sponsors from "./Components/Sponsors"
import Social from "./Components/Social"
import Home from "./Components/Home"

//? Main App Component
function App() {
  return (
    <StyledApp>
      <Navbar />
      <Home />
      <Prizes />
      <Sponsors />
      <Social />
    </StyledApp>
  )
}

const StyledApp = styled.div`
  width: 100%;
  background: linear-gradient(to bottom, #9c99ef, #fac7d5);
  height : 400vh;
  /* font-family: 'Poppins'; */


`


export default App
