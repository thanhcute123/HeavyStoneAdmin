import React, { useState } from "react";
import { PostData, RankingData } from "../../../../data";
import LineChart from "./LineChart/LineChart";
import PieChart from "./PieChart/PieChart";
import "./Charts.css";

const Charts = () => {
    const [postData, setPostData] = useState({
        labels: PostData.map((data) => data.month),
        datasets: [
            {
                label: "Post quantity",
                data: PostData.map((data) => data.quantity),
                backgroundColor: [
                    "rgb(149,106,197)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "#0a0a2a",
                borderWidth: 1,
                tension: 0.4
            },
        ],
    });

    const [docData, setDocData] = useState({
        labels: RankingData.map((data) => data.username),
        datasets: [
            {
                data: RankingData.map((data) => data.activity),
                backgroundColor: [
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderWidth: 1,
            },
        ],
    });

    return (
        <div>
            <div className="w-100 d-flex">
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Posts Overview</h6>
                        </div>
                        <div className="card-body">
                            <div style={{ width: 605 }} className="chart-area">
                                <LineChart chartData={postData}/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Ranking</h6>
                        </div>

                        <div className="card-body">
                            <div className="chart-pie pt-4 pb-2 margin-chart">
                                <PieChart chartData={docData} />
                            </div>
                            {/*<div className="mt-4 text-center small">*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Charts;