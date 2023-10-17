import '../styles/Farm.scss'
import CNTO_LOGO from '../images/logo.png'
import Farming_Bitcoin from '../images/bitcoin.png'
import Farming_Usdc from '../images/usdc.png'
import USDC_BITCOIN from '../images/bitcoin_usdc.png'
export const Farm = () => {
    return(
        <div className= 'farm_container'>
            <div className='fcontainer'>
                <div className='farm_desc_container'>
                    <div className='farm_desc_head'>
                        <div className='text text_white farm_desc_text_head'>Ciento Exchange - </div>
                        <div className='text text_red farm_desc_text_head'>Farming</div>
                    </div>
                    <div className='farm_desc_content'>
                        <div className='text text_white text_medium'>
                            Swap Tokens, earn CNTO Rewards for Liquidty Mining and Staking!
                            CNTO Rewards for all New Pools will start from 18th March 2023.
                        </div>
                    </div>
                    <div className='farm_btn_box'>
                        <div className='farm_btn'>
                            <div className='text text_white text_btn'>Unlock Wallet</div>
                        </div>
                    </div>
                </div>
                <div className='farming_container'>
                    <div className='farming_container_item'>
                        <div className='farm_top_layer'>
                                <div className='ciento_logo'>
                                    <img src={CNTO_LOGO} />
                                </div>
                                <div className='ciento_farm_logo'>
                                    <img src={Farming_Bitcoin} />
                                </div>
                                <div className='farm_bottom_layer'>
                                    <div className='farm_desc_container'>
                                        <div>
                                            <span className='text text_white head_title'>
                                                Ciento
                                            </span>&nbsp;
                                            <span className='text text_red head_title'>
                                                Farm
                                            </span>
                                        </div>
                                        <div className='text text_white content_container'>
                                            Deposit your LP tokens and watch your CNTO rewards grow! Participate in our program and earn CNTO by providing liquidity.
                                        </div>
                                        <div className='ciento_farming'>
                                            <div className='text text_white ciento_farming_button_text'>
                                                Go to Ciento Farm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='farming_container_item'>
                        <div className='farm_top_layer'>
                                <div className='ciento_logo'>
                                    <img src={Farming_Usdc} />
                                </div>
                                <div className='ciento_farm_logo'>
                                    <img src={USDC_BITCOIN} />
                                </div>
                                <div className='farm_bottom_layer'>
                                    <div className='farm_desc_container'>
                                        <div>
                                            <span className='text text_white head_title'>
                                                Ciento
                                            </span>&nbsp;
                                            <span className='text text_red head_title'>
                                                Farms
                                            </span>
                                        </div>
                                        <div className='text text_white content_container'>
                                            Grow your CNTO rewards by depositing LP tokens. Join our program to earn CNTO while boosting liquidity. Start earning today!
                                        </div>
                                        <div className='ciento_farming'>
                                            <div className='text text_white ciento_farming_button_text'>
                                                Go to USDC Farms
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}