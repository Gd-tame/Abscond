// import logo from './logo.svg';
import styled from "styled-components";
import bgimagep from "./Media/bgimg.webp";
import bgimageg from "./Media/bgimg.jpg";
import Navbar from "./../src/Components/navbar.js";
import Content from "./../src/Components/content.js";

function App() {
  return (
    <StyledApp>
      
      <Navbar />
      <Content />
      <picture className="he">
        <source srcSet = {bgimagep} alt = " "></source>
        <img src ={bgimageg} alt = " "></img>
      </picture>
      
    </StyledApp>
  );
}
const StyledApp = styled.div
`
width : 100%;
height : 100vh;
position : relative;
overflow : hidden;

.he{
  width : 100vw;
  height : 100vh;
  position : absolute;
  filter : brightness(50%);
  img{
    height : 100%;
    width : 100%;
    object-fit : cover;
    // filter : brigthness(0%);

  
}
}
// @media screen and (max-width : 800px){
//   height : 100%;
// }

`
export default App;
