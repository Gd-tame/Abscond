import styled from "styled-components";
// import bgimg from "./../media/background.png";
// import anime_jpg from "./../media/anime/anime.jpg";
import anime_png from "./../media/anime/anime.png";
import anime_webp from "./../media/anime/anime.webp";
function Admin(){
    return(
        <MyAdmin>
            <div className="login">
                <div className="details">
                    <h2>Admin Login</h2>
                    <form action="">
                        <input type = "text"  placeholder="Username"></input>
                        <br></br>
                        <input type = "password" placeholder="Password"></input>
                        <br></br>
                        <button>Log In</button>
                    </form>
                </div>
                <picture>
                    <source srcSet = {anime_webp} alt = "anime"></source>
                    {/* <source srcSet = {anime_png} alt = "anime"></source> */}
                    <img src={anime_png} alt="anime" />
                </picture>
            </div>
        </MyAdmin>
    );
}
const MyAdmin = styled.div
`
width : 100%;
height : 90vh;
z-index : 3;
// background : blue;
top : 10vh;
position : absolute;
display : flex;
flex-direction : column;
justify-content : space-evenly;
.login{
    width : 100%;
    height : 60%;
    position : absolute;
    .details,picture{
        width : 40%;
        height : 100%;
        float : left;
        margin-left : 5%;
        margin-right : 5%;
    }
    .details{
        display : flex;
        flex-direction : column;
        justify-content : space-evenly;
        align-items : center;
        background-color : #f5dbcb;
        opacity : 0.8;
        border-radius : 20px;
        h2{
            font-size : 2.3rem;
        }
        form{
            display : flex;
            flex-direction : column;
            justify-content : space-between;
            align-items : center;
            input{
                font-size : 1rem;
                padding : 0.8rem;
                height : 2.5rem;
                width : 25rem;
                border-radius : 10px;
                background-color : white;
            }
            button{
                width : 5.3rem;
                height : 2.1rem;
                border-radius : 9px;
                outline : none;
                font-size : 1rem;
            }
            button:hover{
                background : white;
                border : none;
                cursor : pointer;
                color : red;
            }
        }
    }
    picture{
        img{
            object-fit : contain;
        }
        
    }

}
@media only screen and (max-width: 1100px){
    .login{
    .details{
        h2{
            font-size : 1.5rem;
        }
    form{
        input{
            width : 18rem;
            padding : 0.5rem;
        }
    }
}
}
}
@media only screen and (max-width : 800px){
    picture{
        display : none;
    }
    .login{
        display : flex;
        justify-content : space-evenly;
        height : 80%;
        .details{
            width : 80%;
            height : 100%;
            margin : 0 0;
            // justify-content: space-evenly;
            h2{
                font-size : 2rem;
            }
        }
        picture{
            position : absolute;
            left : 0%;
            width : 0%;
            margin : 0;

        }
    }
    
}
`

export default Admin;