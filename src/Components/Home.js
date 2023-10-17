import '../styles/Home.scss'
import CNTO_LOGO from '../images/logo.png'
import CNTO_EXCHANGE from '../images/cnto_exchange.png'
import CNTO_FARMING from '../images/cnto_farming.png'
import CNTO_STAKING from '../images/cnto_staking.png'
export const Home = () => {
    return (
        <div className="home_container">
            <div className='description'>
                <div className='cnto_exchange_node'>    
                    <div className="cnto_text">
                        <div className='cnto'>Ciento</div>
                        <div className='text'>
                            Exchange from Synergy Nodes
                        </div>
                    </div>
                    <div className="cnto_node_description">
                        Ciento Exchange, a product of Synergy Nodes, facilitating seamless cryptocurrency trading and liquidity provision.
                    </div>
                </div>
                <div className="cnto_exchange_node">
                        <div className="cnto_text">
                            <div className="text">
                                Max Supply: 1 Million CNTO
                            </div>
                        </div>
                        <div className="cnto_node_description">
                                Max Supply: 1 million CNTO tokens - A limited and valuable cryptocurrency offering.
                        </div>
                </div>
                <div className="unlock_wallet">
                    <div className="text">Unlock Wallet</div>
                </div>
            </div>
            <div className='statistics_box'>
                <div className="statistics">
                    <div className="factorv">
                        <div className="showFactor">
                                <div className="head">USD 15,698.08</div>
                                <div className="desc">Market Cap based on Circulating Supply</div>
                        </div>
                        
                        <div className="showVal">
                                <div className="head">USD 29,409.6</div>
                                <div className="desc">Total Value Locked (TVL)</div>
                        </div>
                    </div>
                    <div className="factorv">
                        <div className="showFactor">
                                <div className="head">237,078.70 CNTO</div>
                                <div className="desc">Circulating Supply</div>
                        </div>
                        
                        <div className="showVal">
                                <div className="head">USD 15,698.08</div>
                                <div className="desc">CNTO Price</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dex">
                <div className="logo_box">
                    <div className="logo-item">
                        <div className="logo_container">
                            <div className="logo">
                                <img src={CNTO_LOGO}/>
                            </div>
                            <div className="logocontainer">
                            <img src={CNTO_EXCHANGE}/>
                            </div>
                        </div>
                        <div className="dex_container">
                            <span className="head_1">Ciento</span>&nbsp;
                            <span className="head_2">Exchange</span>
                            <div className="content">
                                Swap any tokens with ease, empowering your crypto journey with efficiency and convenience.
                            </div>
                            <div className="btn">
                                Go to Exchange
                            </div>
                        </div>
                    </div>
                    <div className="logo-item">
                        <div className="logo_container">
                            <div className="logo">
                                <img src={CNTO_LOGO}/>
                            </div>
                            <div className="logocontainer">
                            <img src={CNTO_FARMING}/>
                            </div>
                        </div>
                        <div className="dex_container">
                            <span className="head_1">Ciento</span>&nbsp;
                            <span className="head_2">Farming</span>
                            <div className="content">
                                Be a liquidity provider and enjoy the benefits of passive income by facilitating seamless token trading.
                            </div>
                            <div className="btn">
                                Go to Farming
                            </div>
                        </div>
                    </div>
                    <div className="logo-item">
                        <div className="logo_container">
                            <div className="logo">
                                <img src={CNTO_LOGO}/>
                            </div>
                            <div className="logocontainer">
                            <img src={CNTO_STAKING}/>
                            </div>
                        </div>
                        <div className="dex_container">
                            <span className="head_1">Ciento</span>&nbsp;
                            <span className="head_2">Staking</span>
                            <div className="content">
                                Maximize the potential of your CNTO holdings and embrace the power of staking for consistent rewards.
                            </div>
                            <div className="btn">
                                Go to Staking
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}