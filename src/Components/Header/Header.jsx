import React from 'react'
import { HeaderStyle } from './Header.style'
import logo from "../../Images/25-08-2019-2-HVID.png"

function Header() {
  return (
    <HeaderStyle>
            <nav>
              <img src={logo} alt="logo" />
              <ul>
                <li>
                  Hjem
                </li>
                <li>
                  Om os
                </li>
                <li>
                  Priser
                </li>
                <li>
                  Domæner
                </li>
                <li>
                  Whois lookup
                </li>
              </ul>
              <ul>
                <li>
                  Log ind
                </li>
                <li style={{
                  backgroundColor: "black",
                  borderRadius: "18px",
                  padding: "1vh 2vw",
                  height: '4vh',
                  marginTop: "4vh"
                  
                }}>
                  Registrer
                </li>
              </ul>
            </nav>
    </HeaderStyle>
  )
}

export default Header