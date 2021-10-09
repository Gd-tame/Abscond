import styled from 'styled-components';
import anime from './anime.jpg';
import anime2 from './anime.png';
import anime3 from './anime.webp';
import {BsInstagram} from 'react-icons/bs'

function Sponsors(){
    return <StyledSponsors>
        <picture>
            <source srcSet = {anime3} alt = "h"></source>
            <source srcSet = {anime2} alt = "h"></source>
            <img src =  {anime} alt = "h"></img>
            
        </picture>
        <BsInstagram className = "Instagram" />
    </StyledSponsors>
}

const StyledSponsors = styled.div
`

width : 100%;
height : 100vh;
position : relative;

img{
    width: 28%;
}
.Instagram{
    font-size : 5rem;
    color : white;
}


`
export default Sponsors
