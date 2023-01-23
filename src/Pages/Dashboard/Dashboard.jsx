import React, { useState } from 'react'
import "./Dashboard.css"
import { Container, Row, Col } from "react-bootstrap";
import { GiWhirlpoolShuriken } from 'react-icons/gi'
import { GiStarSwirl } from 'react-icons/gi'
import { ImLocation2 } from 'react-icons/im'
import { BiTime } from 'react-icons/bi'
import { MdAttachMoney } from 'react-icons/md'
import { TbCalendarTime } from 'react-icons/tb'
import { BsPersonPlusFill } from 'react-icons/bs'
import { ImConnection } from 'react-icons/im'
import { GiTakeMyMoney } from 'react-icons/gi'
import { BsFillTrophyFill } from 'react-icons/bs'
import { BsFillStarFill } from 'react-icons/bs'
import { FaChessQueen } from 'react-icons/fa'
import { TbStairsUp } from 'react-icons/tb'
import { FiLink } from 'react-icons/fi'
import { FaRegCopy } from 'react-icons/fa'
import { MdAccountBalanceWallet } from 'react-icons/md'
import PoolCard from '../../Component/PoolCard/PoolCard';
import Bank from "./../../Images/bank2.png";
import Split from "./../../Images/split2.png";
import Deposit from "./../../Images/withdraw.png";
import Countdown from "react-countdown";
const Dashboard = () => {

    return (
        <React.Fragment>
            <div className='topColor'>
                <h4>Dashboard</h4>
            </div>
            <Row className="p-4" style={{ marginTop: "-90px" }}>
                <Col lg="12">
                    <Row>
                        <Col lg="3" md="6" className="p-2">
                            <PoolCard
                                img={GiStarSwirl}
                                title="Daily Lucky Pool"
                                price="12"
                                bgColor="#AB47BC"
                            />
                        </Col>
                        <Col lg="3" md="6" className="p-2">
                            <PoolCard
                                img={GiStarSwirl}
                                title="Daily 5 star Pool"
                                price="9"
                                bgColor="#9FCC2E"
                            />
                        </Col>
                        <Col lg="3" md="6" className="p-2">
                            <PoolCard
                                img={GiStarSwirl}
                                title="Daily 4 star Pool"
                                price="20"
                                bgColor="#FA9F1B"
                            />
                        </Col>
                        <Col lg="3" md="6" className="p-2">
                            <PoolCard
                                img={GiStarSwirl}
                                title="Top Player Reward"
                                price="10"
                                bgColor="#03A9F4"
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="px-4">
                <Col lg="8" md="8"><Container id="detailCardContainer">
                    <div className="detailCard">
                        <p><i><ImLocation2 /></i>Contract Address :</p>
                        <span>0x7bbE50919aDa0962ec76746f02bb2e5D3c1Ee468</span>
                    </div>
                    <div className="detailCard">
                        <p><i><BiTime /></i>Platform Running time :</p>
                        <span></span>
                    </div>
                    <div className="detailCard">
                        <p><i><MdAttachMoney /></i>Income :</p>
                        <span>17% in Each Cycle</span>
                    </div>
                    <div className="detailCard">
                        <p><i><TbCalendarTime /></i>Joining Time :</p>
                        <span></span>
                    </div>
                    <div className="detailCard">
                        <p><i><BsPersonPlusFill /></i>Referrals :</p>
                        <span></span>
                    </div>
                    <div className="detailCard">
                        <p><i><ImConnection /></i>Connection Status :</p>
                        <span>Wallet Not Connected.</span>
                    </div>
                    <div className="detailCard">
                        <p><i><GiTakeMyMoney /></i>My Deposit :</p>
                        <span><span>$</span>25</span>
                    </div>
                </Container></Col>
                <Col lg="4" md="4">
                    <div className="bankCardContainer">
                        <div className="bankCard">
                            <div className="bankCardImgDiv"><img src={Bank} alt="" /></div>
                            <button className="btnPrimary">Deposit</button>
                        </div>
                        <div className="bankCard">
                            <div className="bankCardImgDiv"><img src={Deposit} alt="" /></div>
                            <button className="btnPrimary">Withdraw</button>
                        </div>
                        <div className="bankCard">
                            <div className="bankCardImgDiv"><img src={Split} alt="" /></div>
                            <button className="btnPrimary">Split Account</button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="p-4">
                <Col lg="4" md="4" className="p-2">
                    <div className="rewardMainDiv">
                        <div className="rewardInnerDiv">
                            <i><BsFillTrophyFill /></i>
                            <div>
                                <p>Lucky Reward</p>

                            </div>
                        </div>
                        <div style={{ color: "#fff" }}><Countdown style={{ color: "#fff" }} date={Date.now() + 8.64e+7} /></div>
                    </div>
                </Col>
                <Col lg="4" md="4" className="p-2">
                    <div className="rewardMainDiv">
                        <div className="rewardInnerDiv">
                            <i><FaChessQueen /></i>
                            <div>
                                <p>Daily Top Reward</p>

                            </div>
                        </div>
                        <div style={{ color: "#fff" }}><Countdown style={{ color: "#fff" }} date={Date.now() + 8.64e+7} /></div>
                    </div>
                </Col>
                <Col lg="4" md="4" className="p-2">
                    <div className="rewardMainDiv">
                        <div className="rewardInnerDiv">
                            <i><BsFillStarFill /></i>
                            <div>
                                <p>Daily Start Reward</p>

                            </div>
                        </div>
                        <div style={{ color: "#fff" }}><Countdown date={Date.now() + 8.64e+7} /></div>
                    </div>
                </Col>
            </Row >
            <Container fluid className="px-4">
                <div id="detailCardContainer">
                    <div className="detailCard">
                        <p><i><TbStairsUp /></i>My Level :</p>
                        <span>Silver</span>
                    </div>
                    <div className="detailCard">
                        <p><i><MdAttachMoney /></i>Income($) :</p>
                        <span>200</span>
                    </div>
                    <div className="detailCard">
                        <p><i><BsPersonPlusFill /></i>Referral Income :</p>
                        <span>17% in Each Cycle</span>
                    </div>
                    <div className="detailCard">
                        <p><i><MdAccountBalanceWallet /></i>BNB Balance :</p>
                        <span>50</span>
                    </div>
                    <div className="detailCard">
                        <p><i><MdAccountBalanceWallet /></i>BUSD Balance :</p>
                        <span>100</span>
                    </div>
                    <div className="detailCard">
                        <p><i><BsPersonPlusFill /></i>Referral :</p>
                        <span></span>
                    </div>
                    <div className="detailCard">
                        <p><i><GiTakeMyMoney /></i>My Deposit :</p>
                    </div>
                    <div className="d-flex align-items-center linkDiv">
                        <input className='inputPrimary' type="text" placeholder='My Address' style={{ paddingRight: "4rem", height: "40px" }} />
                        <i id="copyIcon"><FaRegCopy /></i>
                        <i id="linkIcon"><FiLink /></i>
                        {/* <button className="btnPrimary" style={{ width: "100px", marginTop: "0px" }}>Copy</button> */}
                    </div>
                </div>
            </Container>
        </React.Fragment >
    )
}
export default Dashboard