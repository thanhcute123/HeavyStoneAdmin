import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Table.css";

const Table = () => {
    return(
        <div className="w-100">
            <div class="card shadow mb-4 card-table">
                <div class="card-body">
                    <div className="table-add">
                        <button className="button-add">+ Add</button>
                    </div>
                    <div className="table-search">
                        <input placeholder="Search" size="40" type="text" />
                        <FontAwesomeIcon className="mr-2" icon={faSearch} />
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Club name</th>
                                <th>Club President</th>
                                <th>Class</th>
                                <th>Phone</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Club name</th>
                                <th>Club President</th>
                                <th>Class</th>
                                <th>Phone</th>
                                <th>Email</th>
                            </tr>
                            </tfoot>
                            <tbody>
                            <tr>
                                <td>BD</td>
                                <td>CLB Bóng đá HUS</td>
                                <td>Vãi Thu Thanh</td>
                                <td>K63A4 - MTTT</td>
                                <td>0843492834</td>
                                <td>vtt@hus.com</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    )

}
export default Table;
