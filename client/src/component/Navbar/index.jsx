import React,  {useState, useEffect} from 'react'
import { FaBars, FaTimes} from "react-icons/fa"
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks} from "./navbarElements";

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => setClick(!click);
    const changeNav = () => {
        if (window.location.href.indexOf("wallet") > -1 || click || window.location.href.indexOf("reward") > -1) {
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
                    <h5>Loyalty Reward</h5>
                </NavLogo>
                <MobileIcon onClick = {handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </MobileIcon>
            </NavbarContainer>
            <NavMenu onClick={handleClick} click ={click}>
                    <NavItem>
                        <NavLinks to = "/wallet">WALLET</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "/reward">REWARD</NavLinks>
                    </NavItem>
            </NavMenu>
        </Nav>
    )
};