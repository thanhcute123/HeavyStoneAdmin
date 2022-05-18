import React from "react";
import Title from "./Title/Title";
import './UrgentNotice.css';
import Table from "./Table/Table";
const UrgentNotice = () => {
  return (
      <div className="urgent-notice">

          <Title/>
          <Table/>
      </div>
  )
}
export default UrgentNotice;