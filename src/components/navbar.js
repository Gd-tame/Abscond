import styled from "styled-components";

function Navbar(){
    return(
        <Styledbar>
            <h1>Abscond</h1>
        </Styledbar>
    );
}
const Styledbar = styled.div
`
height : 10vh;
width : 100%;
display : flex;
background : black;
z-index : 2;
position : absolute;
h1{
    color : white;
    margin-left : 5%;
    align-self : center;
    font-weight : 500;
}
@media only screen and (max-width : 800px){
    h1{
        margin-left : 10%;
    }
}
`
export default Navbar;