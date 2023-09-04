import React from 'react';
import Button from '../../components/buttons/Button'
import Balancetrack from '../../components/BalanceDash/Balancetrack';



function Boards({containWidth}) {
    const siteTitle = {
        theHead: 'Account Balance'
    };

    return (
        <div className="board-padd" style={containWidth}>
            <div className='board-main-container'>
                <div className="container-board">
                    <div className="board-text">
                        <h2>MyHealthify ID Number</h2>
                        <p>MH34587-2022</p>
                    </div>
                    <div className="board-btn">
                        <Button icon className='subsciption-btn' text='My Subscription' />
                    </div>
                </div>
                <div className="sub-content">
                    <div className="sub-content-text">
                        Please check your inbox to verify your email.
                    </div>
                    <div className="sub-content-select">
                        <select className='sub-cont-sel'>
                            <option value="">Daily</option>
                            <option value="">Weekly</option>
                            <option value="">Monthly</option>
                            <option value="">Yearly</option>
                        </select>
                    </div>
                </div>

                <div className="account-cash-total">
                    <Balancetrack siteTitle={siteTitle.theHead} />
                    <Balancetrack siteTitle='Cashbacks' />
                    <Balancetrack siteTitle='Total Spent' />
                    <Balancetrack siteTitle='Total Loan' />
                </div>
                <div className="history-ai-doc-container">
                    <div className="history">
                        <h6 style={{ fontWeight: '600' }}>Transaction History</h6>
                    </div>
                    <div className="ai-doc">
                        <h6 style={{ fontWeight: '600' }}>AI Doctor</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boards
