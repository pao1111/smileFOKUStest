import React, { Component } from "react";
import Monitortable from "./Monitortable";
import tabdata from "../data.json";

class Monitor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Monitor-box">
                <div className="Monitor-box-text">
                    <span className="monitor-text">Yearly Member 01-Jan-2020 to 31-Dec-2020</span>
                    <div>
                        <select className="selectbox-year">
                            <option>Year View</option>
                        </select>
                        <span className="selectbox-date" type="date"> 2020
                        </span>
                    </div>
                </div>

                        <div className="monitor-inbox">
                            <div className="monitorbox-left">
                                <div className="monitorbox-text-left">
                                    <div className="monitorbox-textinside">
                                        <span>Total <span className="box-hint">Members :</span></span>
                                        <span className="box-hint"></span>
                                    </div>
                                    <div className="monitorbox-textinside">
                                        <span>Total <span className="box-hint">Rev.<span className="box-hintsm"> (THB) </span>:</span></span>
                                        
                                        <span className="box-hint">639K</span>

                                    </div>
                                </div>
                            </div>

                            <div className="monitorbox-right">
                                <div className="monitorbox-textinside-name">
                                    <span> </span>
                                </div>
                                <div className="monitorbox-textinside">
                                    <span>Total <span className="box-hint">Members :</span></span>
                                    <span className="box-hint"></span>
                                </div>
                                <div className="monitorbox-textinside">
                                    <span>Total <span className="box-hint">Rev.<span className="box-hintsm"> (THB) </span>:</span></span>
                                    <span className="box-hint">639K</span>
                                </div>
                            </div>
                        </div>
                   
            </div>
        );
    }
}

export default Monitor;
