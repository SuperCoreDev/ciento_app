import '../styles/Lottery.scss'
import '../styles/Home.scss'
import CNTO_LOGO from '../images/logo.png'
import CNTO_Deposit from '../images/ciento_deposit.png'
import CNTO_Ticket from '../images/ciento_ticket.png'
import DropListIco from '../images/dropdown.png'
export const Lottery = () => {
    return (
        <div className='lottery_container'>
            <div className='mcontainer'>
                <div className='desc_container'>
                    <div className='desc_head'>
                        <div className='text text_white desc_text_head'>Ciento Exchange - </div>
                        <div className='text text_red desc_text_head'>Lottery</div>
                    </div>
                    <div className='desc_content'>
                        <div className='text text_white text_medium'>
                            Experience the thrill of winning with Ciento Exchange's exciting lottery program. Participate now for exciting prizes!
                        </div>
                    </div>
                    <div className='btn_box'>
                        <div className='btn'>
                            <div className='text text_white text_btn'>Prize : 250 USDC</div>
                        </div>
                    </div>
                </div>
                <div className='statistics_container'>
                    <div className='statistics'>
                        <div className='sta_detail'>
                            <div className='text text_white sta_val'>53903 CNTO</div>
                            <div className='text text_white sta_desc'>Total CNTO Depoist</div>
                        </div>
                        <div className='red_border'></div>
                        <div className='sta_detail'>
                            <div className='text text_white sta_val'>3483 Ticket</div>
                            <div className='text text_white sta_desc'>Total Ticket  Generalized</div>
                        </div>
                        <div className='red_border'></div>
                        <div className='sta_detail'>
                            <div className='text text_white sta_val'>0%</div>
                            <div className='text text_white sta_desc'>Your Chances of Winning</div>
                        </div>
                    </div>
                    <div className='statistics_responsive'>
                        <div className='statistics_responsive_item'>
                            <div className='text text_white sta_desc'>Total CNTO Depoist</div>
                            <div className='text text_white sta_desc'>53903 CNTO</div>
                        </div>
                        <div className='statistics_responsive_item'>
                            <div className='text text_white sta_desc'>Total Ticket  Generalized</div>
                            <div className='text text_white sta_desc'>3483 Ticket</div>
                        </div>
                        <div className='statistics_responsive_item'>
                            <div className='text text_white sta_desc'>Your Chances of Winning</div>
                            <div className='text text_white sta_desc'>0%</div>
                        </div>
                    </div>
                </div>
                <div className='lottery_btn_group'>
                    <div className='lottery_btn'>
                        <div className='text text_white lottery_btn_text'>Deposits Ends in - 1D : 23H : 24 Min</div>
                    </div>
                    <div className='lottery_btn'>
                        <div className='text text_white lottery_btn_text'>Lottery Ends in - 1D : 23H : 24 Min</div>
                    </div>
                </div>
                <div className='deposit_ticket_container'>
                    <div className='container_item'>
                        <div className='top_layer'>
                            <div className='ciento_logo'>
                                <img src={CNTO_LOGO} />
                            </div>
                            <div className='ciento_deposit_logo'>
                                <img src={CNTO_Deposit} />
                            </div>
                            <div className='bottom_layer'>
                                <div className='deposit_ticket_desc_container'>
                                    <div className='text text_white head_title'>
                                        0 Ciento - Your Depoist
                                    </div>
                                    <div className='text text_white content_container'>
                                        Deposit your LP tokens and watch your CNTO rewards grow! Participate in our program and earn CNTO by providing liquidity.
                                    </div>
                                    <div className='deposit_btn_group'>
                                        <div className='ciento_deposit_withdraw deposit_btn'>
                                            <div className='text text_white ciento_deposit_withdraw_btn_text'>
                                                Deposit
                                            </div>
                                        </div>
                                        <div className='ciento_deposit_withdraw withdraw_btn'>
                                            <div className='text text_red ciento_deposit_withdraw_btn_text'>
                                                Widthdraw
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container_item'>
                        <div className='top_layer'>
                            <div className='ciento_logo'>
                                <img src={CNTO_LOGO} />
                            </div>
                            <div className='ciento_deposit_logo'>
                                <img src={CNTO_Ticket} />
                            </div>
                            <div className='bottom_layer'>
                                <div className='deposit_ticket_desc_container'>
                                    <div className='text text_white head_title'>
                                        Your Total Tickets
                                    </div>
                                    <div className='text text_white content_container'>
                                        Deposit your LP tokens and watch your CNTO rewards grow! Participate in our program and earn CNTO by providing liquidity.
                                    </div>
                                    <div className='deposit_btn_group'>
                                        <div className='ciento_deposit_withdraw ciento_ticket_button deposit_btn'>
                                            <div className='text text_white ciento_ticket_button_text'>
                                                Get Tickets
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='stake_ciento_tokens'>
                    <div className="stake_header">
                        <span className='text text_white stake_title'>Stake Ciento Token</span>
                        <span className='text text_white stake_available'>Available : 12</span>
                    </div>
                    <div className='stake_control'>
                        <div className='stake_control_drop'>
                            <img src={DropListIco} />
                            <img src={CNTO_LOGO} />
                            <div className='text text_white tokenName'>Ciento</div>
                        </div>
                        <div className='text text_white stake_val'>
                            12 token
                        </div>
                    </div>
                    <div className='approve_btn'>
                        <div className='text text_white approve_text'>
                            Approve
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}