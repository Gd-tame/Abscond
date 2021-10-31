import styled from "styled-components";
import logo from "./logo2.png";

function Navbar() {
  return <StyledNav>
    <header>
      <div className="alpha">
        <img className="logo" src={logo} alt="logo" />
        <div className="logo_text">Abscond</div>
      </div>
      <nav>
        <ul className="nav_links">
          <li><a href="https://www.instagram.com/iiche.tiet/">Prizes</a></li>
          <li><a href="https://www.instagram.com/iiche.tiet/">Sponsors</a></li>
          <li><a href="https://www.instagram.com/iiche.tiet/">Get In Touch</a></li>
        </ul>
        <a className="cta" href="https://www.instagram.com/iiche.tiet/"> <button>Register</button></a>
      </nav>
    </header>
  </StyledNav>
}

const StyledNav = styled.header`
  width: 100%;
  height: 10vh;
  * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
}

body {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#9897f0),
    to(#fac7d5)
  );
  background-image: linear-gradient(#9897f0, #fac7d5);
  font-family: poppins, sans-serif;
  overflow-x: hidden;
}

li,
a,
button {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  text-decoration: none;
}

header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  top: 0%;
  position: absolute;
  padding: 0 4rem;
  height: 10vh;
  z-index: 3;
  width: 100%;
}

header .alpha {
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

header .logo {
  cursor: pointer;
  margin-right: auto;
  width: 2.5rem;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
}

header button {
  padding: 9px 25px;
  background-color: white;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
  margin-left: 20px;
}

.cta :hover {
  background: transparent;
  outline: 2px solid #fff;
  color: #fff;
}

header .logo_text {
  font-size: 1.5rem;
  margin-left: 1rem;
  font-weight: 500;
}

header nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

header .nav_links {
  list-style: none;
}

header .nav_links li {
  display: inline-block;
  padding: 0% 20px;
}

header .nav_links li a {
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

header .nav_links li a:hover {
  color: #0088a9;
}
`
export default Navbar
