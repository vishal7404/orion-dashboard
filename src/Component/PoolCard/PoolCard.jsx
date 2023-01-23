import React from 'react'
import "./PoolCard.css"
const PoolCard = (props) => {
    return (
        <React.Fragment>
            <div className="poolCard d-flex" style={{ background: props.bgColor }}>
                <div className="cardImg"><i><props.img /></i></div>
                <div className="cardText">
                    <p>{props.title}</p>
                    <h4><span>$ </span> {props.price}</h4>
                </div>
            </div>
        </React.Fragment>
    )
}
export default PoolCard