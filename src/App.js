import styled from 'styled-components';
import bgimg from './media/background.png';
import Navbar from "./components/navbar.js";
import Admin from "./components/page.js";

function App() {
  return (
    <StyledApp>
      <Navbar/>
      <Admin />
      <picture>
        <img src = {bgimg} alt = "bgimg"></img>
      </picture>
    </StyledApp>
  );
}
const StyledApp = styled.div
`

height : 100vh;
width : 100%;
position : relative;
picture{
  position : absolute;
  width : 100%;
  height : 100%;
  img{
    width : 100%;
    height : 100%;
  }
}
`

export default App;
