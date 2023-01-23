import React, { useState } from 'react'
import "./SideBar.css"
import NavPages from '../../NavPages';
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./../../Images/logo.png"
import { FaHome } from "react-icons/fa";
import { RiLuggageDepositFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineSplitCells } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { CgMenuLeft } from "react-icons/cg";
import { FaUserCog } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
// import { GrContactInfo } from "react-icons/gr";
import { MdOutlinePermDeviceInformation } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.css';
const SideBar = () => {
    const [activeSideTab, setActiveSideTab] = useState("dashboard");
    const [sideToggle, setSideToggle] = useState("0px");
    const [rightSideToggle, setRightSideToggle] = useState("240px");
    const [settingToggle, setSettingToggle] = useState("none")

    return (
        <React.Fragment>
            <Container fluid className="p-0">
                <div id="sidebar" style={{ left: sideToggle }}>
                    <div>
                        <div id="logoDiv" style={{ padding: "10px" }}>
                            <img src={Logo} alt="" /></div>
                    </div>
                    <div id="sideItemSection">
                        <NavLink to="/">
                            <div onClick={() => setActiveSideTab("dashboard")} className="sideItems" id={`${activeSideTab === "dashboard" ? "activeTab" : "noActive"}`}>
                                <i id="sideItemId"><FaHome /></i>
                                <h5 id="sideItemTitle" className="align-items-center ">Dashboard</h5>
                            </div></NavLink>
                        <NavLink to="/deposit">
                            <div onClick={() => setActiveSideTab("deposit")} className="sideItems" id={`${activeSideTab === "deposit" ? "activeTab" : "noActive"}`}>
                                <i id="sideItemId"><RiLuggageDepositFill /></i>
                                <h5 id="sideItemTitle" className="align-items-center">Deposit</h5>
                            </div>
                        </NavLink>
                        <NavLink to="/withdraw">
                            <div onClick={() => setActiveSideTab("withdraw")} className="sideItems" id={`${activeSideTab === "withdraw" ? "activeTab" : "noActive"}`}>
                                <i id="sideItemId"><GiTakeMyMoney /></i>
                                <h5 id="sideItemTitle" className="align-items-center">Withdraw</h5>
                            </div>
                        </NavLink>
                        <NavLink to="/split-account">
                            <div onClick={() => setActiveSideTab("split")} className="sideItems" id={`${activeSideTab === "split" ? "activeTab" : "noActive"}`}>
                                <i id="sideItemId"><AiOutlineSplitCells /></i>
                                <h5 id="sideItemTitle" className="align-items-center">Split Account</h5>
                            </div>
                        </NavLink>
                        <NavLink to="/latest-deposit">
                            <div onClick={() => setActiveSideTab("latetsDeposit")} className="sideItems" id={`${activeSideTab === "latetsDeposit" ? "activeTab" : "noActive"}`}>
                                <i id="sideItemId"><GiReceiveMoney /></i>
                                <h5 id="sideItemTitle" className="align-items-center">Latest Deposits</h5>
                            </div>
                        </NavLink>
                        <NavLink to="/myteam">
                            <div onClick={() => setActiveSideTab("mytaem")} className="sideItems" id={`${activeSideTab === "mytaem" ? "activeTab" : "noActive"}`}>
                                <i id="sideItemId"><RiTeamFill /></i>
                                <h5 id="sideItemTitle" className="align-items-center">My Team</h5>
                            </div>
                        </NavLink>
                        <NavLink to="/deposit-details">
                            <div onClick={() => setActiveSideTab("depositDetail")} className="sideItems" id={`${activeSideTab === "depositDetail" ? "activeTab" : "noActive"}`}>
                                <i id="sideItemId"><MdOutlinePermDeviceInformation /></i>
                                <h5 id="sideItemTitle" className="align-items-center">Deposit Details</h5>
                            </div>
                        </NavLink>
                    </div>
                    <div id="circle">
                    </div>
                    <div id="circle2">
                    </div>
                </div>
                <div id="rightSection" style={{ marginLeft: rightSideToggle }}>
                    <div className="topNav">
                        <i onClick={() => sideToggle === "0px" ? (setSideToggle("-300px"), setRightSideToggle("0px")) : (setSideToggle("0px"), setRightSideToggle("240px"))}><CgMenuLeft /></i>
                        <div className="d-flex topNavRight">
                            <h3>John Doe</h3>
                            <div>
                                <i onClick={() => settingToggle === "none" ? setSettingToggle("block") : setSettingToggle("none")}><FaUserCog /></i>
                                <div className="setting" style={{ display: settingToggle }}>
                                    <p onClick={() => setSettingToggle("none")}><i><FaUserEdit /></i> Edit Profile </p>
                                    <p onClick={() => setSettingToggle("none")}><i><AiTwotoneSetting /></i> Setting </p>
                                    <p onClick={() => setSettingToggle("none")}><i><IoMdLogOut /></i> Logout </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="contentSection" style={{ background: "#141B2D" }}>
                        <NavPages />
                    </div>
                </div>
            </Container>
        </React.Fragment >
    )
}
export default SideBar

// onClick={() => sideToggle === "0px" ? (setSideToggle("-300px"), setRightSideToggle("0px")) : (setSideToggle("0px"), setRightSideToggle("240px"))}