import styled from "styled-components"
import Login from "./Components/Login"

//? Main App Component
function App() {
  return (
    <StyledApp>
      <Login />
    </StyledApp>
  )
}

const StyledApp = styled.div`
  width: 100%;
  background: linear-gradient(to bottom, #9c99ef, #fac7d5);
`

export default App
