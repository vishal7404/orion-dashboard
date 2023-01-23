import React from 'react'
import { Container } from 'react-bootstrap'
import "./Withdraw.css"
const Withdraw = () => {
    return (
        <React.Fragment>
            <Container style={{ paddingTop: "20px" }}>

                <Container id="withdrawContainer">
                    <div className='withdrawMainDiv'>
                        <div className="withdrawDiv">
                            <h1>Withdraw</h1>
                            <p>Wallet Not Connected</p>
                            <div className="withdrawText">
                                <p>Unlock principal</p>
                                <p>0.00</p>
                            </div>
                            <div className="withdrawText">
                                <p>Cycle reward</p>
                                <p>0.00</p>
                            </div>
                            <div className="withdrawText">
                                <p>1st level</p>
                                <p>0.00</p>
                            </div>
                            <div className="withdrawText">
                                <p>2-5 level</p>
                                <p>0.00</p>
                            </div>
                            <div className="withdrawText">
                                <p>6-20 level</p>
                                <p>0.00</p>
                            </div>
                            <div className="withdrawText">
                                <p>Lucky Reward</p>
                                <p>0.00</p>
                            </div>
                            <div className="withdrawText">
                                <p>4 Star Reward</p>
                                <p>0.00</p>
                            </div>
                            <div className="withdrawText">
                                <p>5 Star Reward</p>
                                <p>0.00</p>
                            </div>
                            <div className="withdrawText">
                                <p>Top Player Reward</p>
                                <p>0.00</p>
                            </div>
                            <div className="withdrawText">
                                <p>Available withdrawal</p>
                                <p>0.00</p>
                            </div>
                        </div>
                    </div>
                    <button className="btnWithdraw">WITHDRAW</button>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Withdraw