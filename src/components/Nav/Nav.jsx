import {FaHome} from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'
import {MdEmail} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import './Nav.scss'


import Logo from '../../assets/logo.png'
import { useContext } from 'react'
import UserContext from '../UserContext/UserContext'
import { Link } from 'react-router-dom'

export default function Nav() {

    const {user, setUser} = useContext(UserContext)
    

    return (
    <nav className="nav">
        <div className="nav__logo">
            <img className="nav__logo-image" src={Logo} alt="logo hotel & spa" />
        </div>
        <div className="nav__options">
            <div className="nav__options-top">
                <div className="nav__options-contact nav__options-contact--phone"><FiPhoneCall/>+420 778 050 055</div>
                <div className="nav__options-contact nav__options-contact--email"><a href="mailto:info@hotelandspa.com"><MdEmail/> info@hotelandspa.com</a></div>
            </div>
            <div className="nav__options-bottom">
                <div className="nav__options-buttons">
                    <button className="nav__options-button nav__options-button--home"><FaHome/></button>
                    <button className="nav__options-button nav__options-button--about">About us</button>
                    <button className="nav__options-button nav__options-button--partner">Be our partner</button>
                    <button className="nav__options-button nav__options-button--contact">Contact us</button>
                    {user ? 
                    <>
                        <button className="nav__options-button nav__options-button--profile"><CgProfile/>My profile</button>
                        <Link to='/' onClick={() =>setUser(false)} ><button className="nav__options-button nav__options-button--logout"><FiLogOut/>Logout</button></Link>
                    </>
                    : ""
                    }
                </div>
                <div className="nav__options-select">
                    <select className="nav__options-select-language" name="languages" id="">
                        <option className="nav__options-select-language-option" value="english">English</option>
                        <option className="nav__options-select-language-option" value="czech">Czech</option>
                    </select>
                </div>
            </div>
        </div>
    </nav>)

}