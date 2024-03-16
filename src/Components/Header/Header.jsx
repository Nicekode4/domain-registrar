import React from 'react'
import { HeaderStyle } from './Header.style'
import logo from "../../Images/25-08-2019-2.png"

function Header() {
  return (
    <HeaderStyle>
            <nav>
              <img src={logo} alt="logo" />
              <ul>
                <li>
                  Home
                </li>
                <li>
                  Domains
                </li>
                <li>
                  Whois
                </li>
              </ul>
            </nav>
    </HeaderStyle>
  )
}

export default Header