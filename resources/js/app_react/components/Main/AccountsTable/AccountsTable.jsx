import React from "react";
import Title from "./Title/Title";
import Table from "./Table/Table";
import './AccountsTable.css'
const AccountsTable = () => {
    return(
        <div className="userstable">
            <Title/>
            <Table/>
        </div>
    )

}
export default AccountsTable
