import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faPager, faFile, faCodePullRequest } from '@fortawesome/free-solid-svg-icons';
import "./Figure.css";

const Figure = () => {
    return(
        <div>
            <div className="w-100 d-flex">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Users
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">5232</div>
                                </div>
                                <div className="col-auto">
                                    <FontAwesomeIcon className="figure-icon" icon={faUsers}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Posts
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">215,000</div>
                                </div>
                                <div className="col-auto">
                                    <FontAwesomeIcon className="figure-icon" icon={faPager} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Documents
                                    </div>
                                    {/*<div className="row no-gutters align-items-center">*/}
                                    {/*    <div className="">*/}
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">1200</div>
                                        {/*</div>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="col-auto">
                                    <FontAwesomeIcon className="figure-icon" icon={faFile} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Pending Requests
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                </div>
                                <div className="col-auto">
                                    <FontAwesomeIcon className="figure-icon" icon={faCodePullRequest}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )

}
export default Figure;
