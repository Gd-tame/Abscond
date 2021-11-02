// import styled from "styled-components";
import styled from "styled-components";
import createp from "./../Media/content/create.webp";
import createg from "./../Media/content/create.jpg";
import joinp from "./../Media/content/join.webp";
import joing from "./../Media/content/join.jpg";


function Content(){
    return(
    <StyledContent>
        <div className="main">
            <div className="guild">
            <span>Create a Guild</span>
                <picture>
                <source srcSet = {createp} alt = " "></source>
                <img src={createg} alt=" " ></img>
                </picture>
                
            </div>
            <div className="guild">
            <picture>
                <source srcSet = {joinp} alt = " "></source>
                <img src={joing} alt=" " ></img>
                </picture>
            <span>Join a Guild</span>

             
            </div>
        </div>
    </StyledContent>
    );
}
const StyledContent = styled.div
`
    position : absolute;
    z-index : 2;
    top : 10vh;
    width : 100%;
    height : 90vh;
    .main{
        
        display : flex;
        padding : 0rem 10rem;
        width : 100%;
        justify-content : space-between;
        .guild{
            padding-top : 25vh;
            width : 45%;
            height : 60vh;
            margin : 0;
            color : white;
            display : flex;
            flex-direction : column;
            justify-content : center;
            text-align:center;
            font-size : clamp(2rem,6vw,6rem);
            position : relative;
            z-index : 5;
            span{
                z-index : 10;
            }
            picture{
                width : 100%;
                height : 100%;
                position : absolute;
                z-index :3;
                img{
                    height : 100%;
                    width : 100%;
                    object-fit : cover;
                    filter :brightness(35%) blur(0.25rem);
                }
            }
        }
    }
    @media screen and (max-width : 998px){
        .main{
            padding : 0 6rem;
        }
    }
    @media screen and (max-width : 800px){

        height : 100vh;
        .main{
            >.guild+.guild{margin-top : 1rem};
            display : flex;
            // padding : vh 3rem;
            width : 100%;
            flex-direction : column;
            justify-content : space-evenly;
            .guild{
                padding-top : 0vh;
                width : 100%;
                height : 40vh;
                margin : 0;
            }
            }
        
    }
`
export default Content;