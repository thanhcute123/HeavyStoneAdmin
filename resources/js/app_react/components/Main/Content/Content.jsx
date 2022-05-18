import React from "react";
import Title from "./Title/Title";
import Figure from "./Figure/Figure";
import Charts from "./Charts/Charts";
import "../Content/Content.css";

const Content = () => {

    return(
        <div className="content">
            <Title/>
            <Figure/>
            <Charts/>

        </div>
    )

}

export default Content;