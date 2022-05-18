import React from "react";
import Title from "../UsersTable/Title/Title";
import "../UsersTable/UsersTable.css";
import Table from "./Table/Table";
const UsersTable = () => {
    return(
        <div className="userstable">
            <Title/>
            <Table/>
        </div>
    )

}
export default UsersTable
