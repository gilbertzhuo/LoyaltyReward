import React,  {useState, useEffect} from 'react'
import { FaBars, FaTimes} from "react-icons/fa"
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks} from "./navbarElements";
import logo from "../../images/icon.png";

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => setClick(!click);
    const changeNav = () => {
        if (window.scrollY >= 80 || window.location.href.indexOf("trial") > -1 || click) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }
    useEffect(()=> {
        changeNav()
        window.addEventListener("scroll", changeNav)
    },[click])
    return (
          <Nav active = {scroll} click={click}>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon src={logo}/>
                </NavLogo>
                <MobileIcon onClick = {handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </MobileIcon>
            </NavbarContainer>
            <NavMenu onClick={handleClick} click ={click}>
                    <NavItem>
                        <NavLinks to = "/trial">BOOK NOW</NavLinks>
                    </NavItem>
            </NavMenu>
        </Nav>
    )
};