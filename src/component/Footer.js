import React, { Component } from "react";
import tabdata from "../data.json";


const Footer = () => {
    return (
        <div className="footer">
            <table>
                <tbody>
                    <tr style={{ padding: "0 16px" }}>
                        <td className="center f1">Total</td>

                        <td className="center f2"></td>
                        <td className="center f3"></td>
                        <td className="right f4">{tabdata.data.summarytier[0].total_amount}</td>
                        <td className="right f5">{tabdata.data.summarytier[0].total_members}</td>
                        <td className="right f6">{tabdata.data.summary.totalpoint}</td>
                        <td className="right f7">{tabdata.data.summary.remainingpoint}</td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default Footer;
