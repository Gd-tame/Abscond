import styled from 'styled-components';
import anime from './anime.jpg';
import anime2 from './anime.png';
import anime3 from './anime.webp';
import logo1_png from './media/grab.png'
import logo2_png from './media/logo.png'
import logo3_png from './media/GMC.png'
import logo4_png from './media/build.png'
import logo1_webp from './media/logo1.webp'
import logo2_webp from './media/logo2.webp'
import logo3_webp from './media/logo3.webp'
import logo4_webp from './media/build.webp'
// import {BsInstagram} from 'react-icons/bs'

function Sponsors(){
    return <StyledSponsors>
        <div className="color1"></div>
        <picture>
            <source srcSet = {anime3} alt = "h"></source>
            <source srcSet = {anime2} alt = "h"></source>
            <img src =  {anime} alt = "h"></img>
            
        </picture>
        <div className="heading">
            <h2>Sponsors</h2>
        </div>
        <div className="logos">
            <div className="line0">
                <ul>
                    <li>
                        <span>Saving</span> Sponsor
                    </li>
                </ul>
            </div>
            <div className="line1">
                <ul>
                    <li><picture>
                        <source srcSet = {logo1_webp} alt=""></source>
                        <img src={logo1_png} alt="" />
                        </picture></li>
                    <li><picture>
                        <source srcSet = {logo2_webp} alt=""></source>
                    <img src={logo2_png} alt="" />
                    </picture></li>
                    <li><picture><source srcSet = {logo3_webp} alt = " "></source><img src = {logo3_png} alt = ""></img></picture></li>
                </ul>
            
            </div>
            <div className="line2">
                <ul>
                <li>
                    Grabon
                </li>
                <li>
                    Paper Nest
                </li>
                <li>
                    Give My Certificate
                </li>
                </ul>
            </div>
            <div className="line3">
                <ul>
                <li><picture><source srcSet ={logo4_webp}></source><img src ={logo4_png} alt=""></img></picture></li>
                <li><picture><source srcSet ={logo2_webp}></source><img src = {logo2_png} alt =" "></img></picture></li>
                </ul>
            </div>
            <div className="line4">
                <ul>
                    <li>Build Geeks</li>
                    <li>Paper Nest</li>
                </ul>
            </div>
        
        
        </div>
        
        {/* <BsInstagram className = "Instagram" /> */}
    </StyledSponsors>
}

const StyledSponsors = styled.div
`

width : 100%;
height : 100vh;
position : relative;
overflow : hidden;


    h2{
        padding :4rem var(--padding);
        font-size : clamp(2.5rem,6vw,5rem);
        font-weight : 500;
    }


picture{
    z-index : 2;
    width :24%;
    position: absolute;
    left:75%;
    top : 20%;
    img{
    width: 100%;
    display : block;
    
}
}
.color1{
    position : absolute;
    width : 500px;
    height : 500px;
    border-radius : 50%;
    background-color :#FFDE88;

    left : 70%;
    top : 23%;

}
.logos{
    height : 70%;
    width : 80%;
    // background-color : black;
    position : absolute;
    top : 28%;
    display  :flex;
    flex-direction : column;
    justify-content : space-evenly;
    .line0{
        display:flex;
        flex-direction : row;
        justify-content: space-evenly;
        align-content : center;
        width : 100%;
        ul{
            width : 100%;
            height : 4rem;
            padding-left : 4rem;
            li{
                span{
                    color : #615f60;
                }
                float : left;
                width : 200px;
                height : 2rem;
                font-size: 1.25rem;
                text-align : center;
                margin-right : 50px;
                font-weight : 700;
                color : #8ec73f;

            }
        }
    }
    .line1{
        display : flex;
        flex-direction : row;
        justify-content : space-evenly;
        align-items : center;
        width : 100%;
        height : 200px;
        // background-color : white;
        ul{
            width : 100%;
            height : 100%;
            // background-color : pink;
            padding-left : 4rem;
            li{
                float : left;
                width : 200px;
                height : 200px;
                background-color : #FFDE84;
                margin-right : 50px;
                border-radius : 50%;
                picture{
                    position : inherit;
                    img{
                        width : 100%;
                        height : 100%;
                        object-fit : contain;
                    }
                }
            }
        }
    }
    .line2{
        display : flex;
        flex-direction : row;
        justify-content : space-evenly;
        align-items : center;
        width : 100%;
        ul{
            margin-top : 1rem;
            width : 100%;
            height : 2rem;
            // background-color : pink;
            padding-left : 4rem;
            li{
                float : left;
                width : 200px;
                height : 4rem;
                font-size : 1.25rem;
                text-align : center;
                margin-right : 50px;
            }
        }
    }
    .line3{
        display : flex;
            align-items : center;
        margin-top : 1rem;
        display : flex;
        flex-direction : row;
        justify-content : space-evenly;
        align-items : center;
        width : 100%;
        height : 200px;
        // background-color : white;
        ul{
            width : 100%;
            height : 100%;
            // background-color : pink;
            padding-left : 4rem;
            li{
                float : left;
                width : 200px;
                height : 200px;
                background-color : #FFDE84;
                margin-right : 50px;
                border-radius : 50%;
                picture{
                    position : inherit;
                    img{
                        width : 100%;
                        height : 100%;
                        object-fit : contain;
                    }
                }
            }
        }
    }
    .line4{
        display : flex;
        flex-direction : row;
        justify-content : space-evenly;
        align-items : center;
        width : 100%;
        ul{
            display : flex;
            align-items : center;
            margin-top : 1rem;
            width : 100%;
            height : 4rem;
            // background-color : pink;
            padding-left : 4rem;
            li{
                float : left;
                width : 200px;
                height : 2rem;
                font-size : 1.25rem;
                text-align : center;
                margin-right : 50px;
            }
        }
    }
}
@media only screen and (max-width : 1100px){
    .logos{
        .line0{
            ul{
                li{
                   width : 175px;
                   font-size : 1rem;
                   margin-right : 40px;
                }
            }
        }
        .line1,.line3{
            ul{
                height : 175px;

                li{
                    width : 175px;
                    height : 175px;
                    margin-right : 40px;
                }
            }
        }
        .line2,.line4{
            ul{
                li{
                    height : 4rem;
                    width : 175px;
                    margin-right : 40px;
                    font-size : 1rem;
                }
            }
        }
    }
}
@media only screen and (max-width:950px){
    .logos{
        .line0{
            ul{
                li{
                   width : 150px;
                   font-size : 1rem;
                   margin-right : 25px;
                }
            }
        }
        .line1,.line3{
            ul{
                height : 150px;
                li{
                    width : 150px;
                    height : 150px;
                    margin-right : 25px;
                }
            }
        }
        .line2,.line4{
            ul{
                li{
                    height : 4rem;
                    width : 150px;
                    margin-right : 25px;
                    font-size : 1rem;
                }
            }
        }
    }
}
@media only screen and (max-width :800px){
    .logos{
        .line0{
            ul{
                padding-left : 2rem;
                li{
                   width : 125px;
                   font-size : 1rem;
                   margin-right : 15px;
                }
            }
        }
        .line1,.line3{
            ul{
                padding-left : 2rem;

                height : 125px;
                li{
                    width : 125px;
                    height : 125px;
                    margin-right : 15px;
                }
            }
        }
        .line2,.line4{
            ul{
                padding-left : 2rem;

                li{
                    height : 4rem;
                    width : 125px;
                    margin-right : 15px;
                    font-size : 1rem;
                }
            }
        }
    }
}
@media only screen and (max-width : 616px){
    .logos{
        z-index : 3;
        .line0{
            ul{
                padding-left : 2rem;
                li{
                    .logos{
        z-index : 3;
        .line0{
            ul{
                padding-left : 2rem;
                li{
                   width : 100px;
                   font-size : 1rem;
                   margin-right : 5px;
                }
            }
        }
        .line1,.line3{
            height : 100px;
            ul{
                padding-left : 2rem;

                height : 100px;
                li{
                    width : 100px;
                    height : 100px;
                    margin-right : 5px;
                }
            }
        }
        .line2,.line4{
            ul{
                padding-left : 2rem;

                li{
                    height : 4rem;
                    width : 100px;
                    margin-right : 5px;
                    font-size : 1rem;
                }
            }
        }
    }
                   width : 100px;
                   font-size : 1rem;
                   margin-right : 5px;
                }
            }
        }
        .line1,.line3{
            height : 100px;
            ul{
                padding-left : 2rem;

                height : 100px;
                li{
                    width : 100px;
                    height : 100px;
                    margin-right : 5px;
                }
            }
        }
        .line2,.line4{
            ul{
                padding-left : 2rem;

                li{
                    height : 4rem;
                    width : 100px;
                    margin-right : 5px;
                    font-size : 1rem;
                }
            }
        }
    }
}
@media only screen and (max-width:500px){
    picture{
        left : auto;
        right :-10%;
        top :auto;
        bottom : 0;
        width : 70%;
        opacity : 70%;
    }
    .color1{
        left : auto;
        right :-25%;
        width : 400px;
        height : 400px;
    }
    .logos{
        width : 100%;
        .line0,.line1,.line2,.line3,.line4{
            ul{
                li{
                    background: none;
                }
            }
        }
    }
    .logos{
        .line0{
            ul{
                padding-left : 2rem;
                li{
                   width : 80px;
                   font-size : 1rem;
                   margin-right : 5px;
                }
            }
        }
        .line1,.line3{
            height : 80px;
            ul{
                padding-left : 2rem;

                height : 80px;
                li{
                    width : 80px;
                    height : 80px;
                    margin-right : 5px;
                    background: #F8A9F9;
                    picture{
                        opacity: 100%;
                    }
                }
            }
        }
        .line2,.line4{
            ul{
                padding-left : 2rem;

                li{
                    height : 4rem;
                    width : 80px;
                    margin-right : 5px;
                    font-size : 1rem;
                }
            }
        }
    }
    
}






`
export default Sponsors
