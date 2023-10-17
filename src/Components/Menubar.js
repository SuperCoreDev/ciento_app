import '../styles/Menubar.scss'
import Home from '../images/home.png'
import Home_S from '../images/home_s.png'
import Trading from '../images/trading.png'
import Trading_S from '../images/trading_s.png'
import Pool from '../images/pool.png'
import Farming from '../images/farming.png'
import Staking from '../images/staking.png'
import StakingOld from '../images/staking_old.png'
import Unbodings from '../images/unbondings.png'
import Lottery from '../images/lottery.png'
import SmartContract from '../images/smart_contract.png'
import KeplrConnect from '../images/keplrconnect.png'
import CntoUtility from '../images/cnto_utility.png'
import Discord from '../images/discord.png'
import Twitter from '../images/twitter.png'
import Telegram from '../images/telegram.png'
import { Link } from 'react-router-dom'
import { useActiveContext } from '../context/Context'
import { useEffect, useRef, useState } from 'react'

export const Menubar = () => {
    const { isActive, setActive } = useActiveContext();
    //const [innerWindowWidth, setInnerWindowWidth] = useState(window.innerWidth);
    // const handleActiveWindowChanged = () => {
    //     setInnerWindowWidth(window.innerWidth);
    // }
    useEffect(() => {
        if (!isActive) ref.current.style.display = 'none';
        else ref.current.style.display = 'flex';
        // window.addEventListener('resize', handleActiveWindowChanged);
        // return () => {
        //     window.removeEventListener('resize', handleActiveWindowChanged);
        // }
    }, [isActive])
    const ref = useRef();
    const onhandler = (e) => {
        e.preventDefault();
        let childlist = ref.current.querySelectorAll('.menu_btn');
        childlist.forEach((element) => {
            //element.className = ".menu_btn";
            element.children[0].children[0].className = "menu_btn_el"
        });
        e.currentTarget.children[0].children[0].className += ' selected';
    }
    return (
        <div ref={ref} className='menubar_container'>
            <div className="menubtn_container">

                <div className="menu_btn" onClick={onhandler} style={{textDecoration:"none"}}>
                    <Link to='/'>
                        <div className='menu_btn_el'>
                            <img style={{ width: "25px", height: "25px" }} src={Home} />
                            <div className="text">Home</div>
                        </div>
                    </Link>
                </div>


                <div className="menu_btn" onClick={onhandler}>
                    <Link to='/trade'>
                        <div className='menu_btn_el'>
                            <img style={{ width: "25px", height: "25px" }} src={Trading} />
                            <div className="text">Trade</div>
                        </div>
                    </Link>
                </div>

                <div className="menu_btn" onClick={onhandler}>
                    <Link to='/a'>
                        <div className="menu_btn_el">
                            <img style={{ width: "25px", height: "25px" }} src={Pool} />
                            <div className="text">Pool</div>
                        </div>
                    </Link>
                </div>

                <div className="menu_btn" onClick={onhandler}>
                    <Link to='/farm'>
                        <div className='menu_btn_el'>
                            <img style={{ width: "25px", height: "25px" }} src={Farming} />
                            <div className="text">Farming</div>
                        </div>
                    </Link>
                </div>

                <div className="menu_btn" onClick={onhandler}>
                    <Link to='/a'>
                        <div className="menu_btn_el">
                            <img style={{ width: "25px", height: "25px" }} src={Staking} />
                            <div className="text">Staking</div>
                        </div>
                    </Link>
                </div>
                <div className="menu_btn" onClick={onhandler}>
                    <Link to='/a'>
                        <div className="menu_btn_el">
                            <img style={{ width: "25px", height: "25px" }} src={StakingOld} />
                            <div className="text">Staking Old</div>
                        </div>
                    </Link>
                </div>
                <div className="menu_btn" onClick={onhandler}>
                    <Link to='/a'>
                        <div className="menu_btn_el">
                            <img style={{ width: "25px", height: "25px" }} src={Unbodings} />
                            <div className="text">Unbodings</div>
                        </div>
                    </Link>
                </div>

                <div className="menu_btn" onClick={onhandler}>
                    <Link to='/lottery'>
                        <div className="menu_btn_el">
                            <img style={{ width: "25px", height: "25px" }} src={Lottery} />
                            <div className="text">Lottery</div>
                        </div>
                    </Link>
                </div>

                <div className="menu_btn" onClick={onhandler}>
                    <Link to='/a'>
                        <div className="menu_btn_el">
                            <img style={{ width: "25px", height: "25px" }} src={SmartContract} />
                            <div className="text">Smart Contract</div>
                        </div>
                    </Link>
                </div>
                <div className="menu_btn" onClick={onhandler}>
                    <Link to='/a'>
                        <div className="menu_btn_el">
                            <img style={{ width: "25px", height: "25px" }} src={KeplrConnect} />
                            <div className="text">Keplr Connect</div>
                        </div>
                    </Link>
                </div>
                <div className="menu_btn" onClick={onhandler}>
                    <Link to='/a'>
                        <div className="menu_btn_el">
                            <img style={{ width: "25px", height: "25px" }} src={CntoUtility} />
                            <div className="text">Cnto Utility</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='socials'>
                <a href='/'>
                    <img src={Discord} style={{ width: "44px", height: "45px" }} />
                </a>
                <a href='/'>
                    <img src={Twitter} style={{ width: "44px", height: "45px" }} />
                </a>
                <a href='/'>
                    <img src={Telegram} style={{ width: "44px", height: "45px" }} />
                </a>
            </div>
        </div>
    )
}