import React from 'react'
import "./MyTeam.css"
import { Container, Row, Col } from 'react-bootstrap'
import { BiTime } from 'react-icons/bi'
import { MdAttachMoney } from 'react-icons/md'
import { TbCalendarTime } from 'react-icons/tb'
import { ImLocation2 } from 'react-icons/im'
import { ImConnection } from 'react-icons/im'
import { SlGraph } from 'react-icons/sl';
import { VscGraphLeft } from 'react-icons/vsc';
import { MdOutlineAutoGraph } from 'react-icons/md';
import { BiNetworkChart } from 'react-icons/bi';
import { TbDatabaseOff } from 'react-icons/tb';
const MyTeam = () => {
    return (
        <React.Fragment>

            <div className='LatestDepositDiv'>
                <Container id="detailCardContainer">
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
                        <p><i><ImConnection /></i>Connection status :</p>
                        <span style={{ color: "red" }}>Wallet not Connected.</span>
                    </div>
                </Container>
                <Container>


                    <Row id="myTeamRow">
                        <Col xs="6" lg="3" id="myTeamCol">
                            <h1 style={{ color: "#1f818b" }}>$260.00</h1>
                            <p>Sales <i><SlGraph /></i></p>
                        </Col>
                        <Col xs="6" lg="3" id="myTeamCol">
                            <h1 style={{ color: "green" }}>$96.00</h1>
                            <p>Downline <i><VscGraphLeft /></i></p>
                        </Col>
                        <Col xs="6" lg="3" id="myTeamCol">
                            <h1 style={{ color: "rebeccapurple" }}>$25.00</h1>
                            <p>Strong Leg <i><MdOutlineAutoGraph /></i></p>
                        </Col>
                        <Col xs="6" lg="3" id="myTeamCol">
                            <h1 style={{ color: "orange" }}>$31.00</h1>
                            <p>Rest Leg <i><BiNetworkChart /></i></p>
                        </Col>
                    </Row>
                </Container>
                <Container className="p-0">
                    <div className="tableOuter">
                        <div className="myTeamTable">
                            <table >
                                <tr>
                                    <th>Address</th>
                                    <th>Layer</th>
                                    <th>Status</th>
                                    <th>Deposit</th>
                                    <th>Time</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <h3 className="noData">No Data To Show <i><TbDatabaseOff /></i></h3>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default MyTeam