import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MdAccountBalance } from "react-icons/md"
import "./Deposit.css"
const Deposit = () => {


    const [BUSD, setBUSD] = useState(0);
    const [totalBUSD, setTotalBUSD] = useState(0);
    const handleChange = (event) => {
        // 👇 Get input value from "event"
        console.log(event.target.value.length)
        if (event.target.value.length == 0) {
            setBUSD(0);
            setTotalBUSD(0);
        }
        setBUSD(event.target.value);
        let x = (event.target.value * 17) / 100;
        let y = parseFloat(x) + parseFloat(event.target.value);
        setTotalBUSD(y);
    };

    return (
        <React.Fragment>
            <Container className=" p-4">
                <Row>
                    <Col lg="2"></Col>
                    <Col lg="8">
                        <div className="depositContainer p-4">
                            <h5 className="text-center depositHeading">Deposit</h5>
                            <Row>
                                <Col xs='6'>
                                    <div className="depositCard">
                                        <i><MdAccountBalance /></i>
                                        <div>
                                            <p>BNB Balance</p>
                                            <p>$ 0.00</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs='6'>
                                    <div className="depositCard">
                                        <i><MdAccountBalance /></i>
                                        <div>
                                            <p>BUSD Balance</p>
                                            <p>$ 0.00</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="inputBusd">
                                <p><i><MdAccountBalance /></i>BUSD</p>
                                <input style={{ width: "30%" }} min={0} max={2000} className="" type="number" placeholder='Enter Quantity' onChange={handleChange}></input>
                            </div>
                            <p style={{ color: "orange" }}>Minimum deposit 50 BUSD. A ratio of 50 max 2000</p>
                            <div>
                                <Row>
                                    <Col xs="4">
                                        <p>Deposit</p>
                                        <p>{BUSD}<span> BUSD</span></p>
                                    </Col>
                                    <Col xs="4">
                                        <p>Each Cycle</p>
                                        <p>17<span>%</span></p>
                                    </Col>
                                    <Col xs="4">
                                        <p>Deposit and interest</p>
                                        <p>{totalBUSD}<span> BUSD</span></p>
                                    </Col>
                                </Row>
                            </div>
                            <p style={{ color: "red", letterSpacing: "1px" }}>Wallet Not Connected</p>

                            <p>10 days per cycle. 17% per cycle <br />
                                You will have to redeposit every time after each cycle. It will have to be either the same amount or bigger amount. Every 1 cycle you deposit 1 extra days will be added without extra rewards. Maximum 45 days.</p>
                            <button className="btnDeposit">Confirm</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Deposit