import '../styles/Navbar.scss'
import Logo from '../images/logo.png';
import LogoText from '../images/logotext.png'
import {TiThMenu} from 'react-icons/ti'
import { useActiveContext } from '../context/Context';
import { useEffect, useRef, useState } from 'react';
export const Navbar = () => {
    const {isActive,setActive} = useActiveContext();
    const [innerWindowWidth , setInnerWindowWidth] = useState(window.innerWidth);
    const [isShow,setIsShow] = useState(true);
    const handleActiveWindowChanged = () => {
        setInnerWindowWidth(window.innerWidth);
    }
    useEffect(()=>{
        if(innerWindowWidth <= 768) {
            //setIsShow(false);
            setActive(false);
        }
        window.addEventListener('resize',handleActiveWindowChanged);
        return () => {
            window.removeEventListener('resize',handleActiveWindowChanged);
        }
    },[innerWindowWidth])
    return (
        <div className="nav_container">
            <div className='logo_nav_container'>
                <TiThMenu size={"41px"} color={isActive ? '#FD4C4C' : '#FFF'} onClick={()=>setActive(!isActive)}/>
                <div>   
                    <img style={{width: '42px', height: '44px'}} src={Logo} />
                    <img className='logo_text' src={LogoText} />
                </div>
            </div>
            <div className="wallet_btn">
                <div className="text">Connect Wallet</div>
            </div>
        </div>
    )
}