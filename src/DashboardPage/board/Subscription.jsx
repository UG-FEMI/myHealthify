import React from 'react'
import Button from '../../components/buttons/Button'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import Navbardash from '../sidenav/Navbardash'
import Sidenav from '../sidenav/Sidenav'


function Subscription() {
  return (
    <div>
      <Navbardash/>
      <Sidenav/>
      <div className="board-padd">
        <div className='board-main-container'>
          <div className="container-board">
            <div className="board-text">
              <h2>Select Your Plan</h2>
              <p>An account of how you're spending your money to live your life better</p>
            </div>
            <div className="board-btn">
              <Button icon className='subsciption-btn' text='My Subscription' />
            </div>
          </div>
          <div className="plan-center-container">
            <div className="cont1">
              <div className="basic-plan-contain">
                <h3>Basic Plan</h3>
                <p>It provides cash support to the one individual insured against all cases of minor disease diagnosis that may occur in the future.</p>
                <ul className='plan-list' style={{ listStyleImage: `url(${RiCheckboxCircleFill})` }}>
                  <li>N10,000 Monthly Coverage Amount</li>
                  <li>N10,000 Monthly Coverage Amount</li>
                  <li>N10,000 Monthly Coverage Amount</li>
                </ul>
                <h5>N6,150 <span className='upper-text'>/monthly basic plan</span></h5>
                <div className="textbox-chat">
                  <p>You can upgrade whenever you want to pay and continue enjoying our healthy plans for your healthy living.</p>
                </div>
              </div>
              <div className="plann-btn">
                <Button className='plan-btn' type='submit' text='Select This Plan' />
              </div>
            </div>
            <div className="cont1">
              <div className="mega-plan-contain">
                <h3>Mega Plan</h3>
                <p>It provides cash support to the all individual insured against all cases of  minor disease diagnosis that may occur in the future. Family or Co-operate group.</p>
                <ul className='plan-list'>
                  <li>%25 cash back</li>
                  <li>N100.000 Coverage Amount</li>
                  <li>N100.000 Coverage Amount</li>
                  <li>N100.000 Coverage Amount</li>
                  <li>N100.000 Coverage Amount</li>
                  <li>N100.000 Coverage Amount</li>
                </ul>
              </div>
              <div className="plann-btn2">
                <Button className='plan-btn' type='submit' text='Select This Plan' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription
