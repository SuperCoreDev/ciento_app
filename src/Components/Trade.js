import '../styles/Trade.scss'
import Ethereum from '../images/ethereum.png'
import Dodge from '../images/dodge.png'
import Dropdown from '../images/dropdown.png'
import Metamask from '../images/metamask.png'
import Coinbase from '../images/coinbase.png'
import LiquidityShield from '../images/liquidity_shield.png'
import EtherLogo from '../images/ether_token.png'
import Dropdownico from '../images/token_down.png'
import ExchangeBox from '../images/exchange_box.png'
import { useEffect, useState } from 'react'
import { useActiveContext } from '../context/Context'
import {CgArrowsExchangeV} from 'react-icons/cg'
export const Trade = () => {
    const {isActive,setActive} = useActiveContext();
    const [innerWindowWidth, setInnerWindowWidth] = useState(window.innerWidth);
    const handleActiveWindowChanged = () => {
        setInnerWindowWidth(window.innerWidth);
    }
    useEffect(() => {
        if ( innerWindowWidth < 640 ) setActive(false);
        window.addEventListener('resize', handleActiveWindowChanged);
        return () => {
            window.removeEventListener('resize', handleActiveWindowChanged);
        }
    }, [innerWindowWidth])
    const [isSwap,setSwapActive] = useState(true);
    const [isAddLiquidity,setAddLiquidityActive] = useState(false);
    
    return (
        <div className="trade_container">
            <div className='container'>
                <div className='desc_container'>
                    <div className='desc_head'>
                        <div className='text text_head text_red'>Ciento</div>
                        <div className='text text_head text_white'>Exchange from Synergy Nodes</div>
                    </div>
                    <div className='desc_content text text_white text_medium'>
                        Ciento Exchange, a product of Synergy Nodes, facilitating seamless cryptocurrency trading and liquidity provision.
                    </div>
                    <div className='btn_box'>
                        <div className='btn' onClick={()=>{setSwapActive(true);setAddLiquidityActive(false);}} style={isSwap? {backgroundColor:'#FD4C4C'} : {backgroundColor:'#0E1965'}}>
                            <div className='text text_btn text_white'>Swap Exchange</div>
                        </div>
                        <div className='btn' onClick={()=>{setAddLiquidityActive(true);setSwapActive(false);}}  style={isAddLiquidity? {backgroundColor:'#FD4C4C'} : {backgroundColor:'#0E1965'}}>
                            <div className='text text_btn text_white'>Liquidity</div>
                        </div>
                    </div>
                </div>
                <div className='main_container'>
                    {isSwap ? (<div className='swap_container'>
                        <div className='swap_btn'>
                            <CgArrowsExchangeV className='swapbtnico' />
                        </div>
                        <div className='mask'></div>
                        <div className='header_box'>
                            <div className='header_text text text_white text_medium'>
                                Ciento Swap
                            </div>
                        </div>
                        <div className='swap_interface'>
                            <div className='swap_exchange'>
                                <div>
                                    <div className='desc text text_white text_btn'>
                                        Most Trusted Swap by Ciento Swap.
                                    </div>
                                    <div className='desc text text_white text_btn'>
                                        Keep your slippage low.
                                    </div>
                                </div>
                                <div className='swap_control'>
                                    <div className='swap_control_drop'>
                                        <img src={Dropdown} style={{width:"12.307px",height:"12.307px"}}/>
                                        <img src={Dodge} style={{width:"29.889px",height:"29.889px"}}/>
                                        <div className='text text_white tokenName'>SHIBA INNU</div>
                                    </div>
                                    <div className='text text_white tokenName'>$23.00</div>
                                </div>
                                <div className='swap_control'>
                                    <div className='swap_control_drop'>
                                        <img src={Dropdown} style={{width:"12.307px",height:"12.307px"}}/>
                                        <img src={Ethereum} style={{width:"29.889px",height:"29.889px"}}/>
                                        <div className='text text_white tokenName'>Ethereum</div>
                                    </div>
                                    <div className='text text_white tokenName'>$0.0079291</div>
                                </div>
                            </div>
                            <div className='swap_wconnect'>
                                <div className='text text_white text_medium' style={{textAlign:'left'}}>Trade tokens in an instant</div>
                                <div className='wallet_btn_box'>
                                    <div className='wallet_btn'>
                                        <img className='wallet_ico' src={Metamask}/>
                                        <div className='text text_white wbtn_text'>CONNECT METAMASK</div>
                                    </div>
                                    <div className='wallet_btn'>
                                        <img className='wallet_ico' src={Coinbase}/>
                                        <div className='text text_white wbtn_text'>CONNECT WALLET</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='footer_box'>
                            <div className='text text_white footer_text'>SWAP NOW</div>
                            <div className='mask_end'></div>
                        </div>
                    </div>) : <></>}
                    {isAddLiquidity ? (<div className='liquidity_container'>
                        <div className='text text_red liquidity_head'>Ciento Liquidity</div>
                        <div className='text text_white liquidity_desc'>Add liquidity to receive LP tokens</div>
                        <div className='text text_white liquidity_you_send'>You Send</div>
                        <div className='liquidity_shield'>
                            <img src={LiquidityShield} />
                        </div>
                        <div className='text text_white shield_desc'>Secured by Synergy Node</div>
                        <div className='main_liquidity_container'>
                            <div className='liquidity_control'>
                                <div className='token_control'>
                                    <div className='token_group'>
                                        <div className='token_logo'><img src={EtherLogo}/></div>
                                        <div className='text text_white token_name'>Ethereum</div>
                                    </div>
                                    <div className='dropdownico'><img src={Dropdownico}/></div>
                                </div>
                                <div className='text text_white token_name'>0.93692 ETH</div>
                            </div>
                            <div className='liquidity_control'>
                                <div className='token_control'>
                                    <div className='token_group'>
                                        <div className='token_logo'><img src={EtherLogo}/></div>
                                        <div className='text text_white token_name'>JESUS AI</div>
                                    </div>
                                    <div className='dropdownico'><img src={Dropdownico}/></div>
                                </div>
                                <div className='text text_white token_name'>0.93692 Jesus</div>
                            </div>
                            <div className='addliquiditybtn'>
                                <div className='text text_white btn_text'>Add Liquidity</div>
                            </div>
                        </div>
                        <div className='exchange_btn'>
                            <CgArrowsExchangeV className='exchange_ico'/>
                            <img src={ExchangeBox}/>
                        </div>
                        </div>):<></>
                    }
                </div>
            </div>
        </div>
    )
}