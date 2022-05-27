import React, {useState, useEffect} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faPager, faFile, faCodePullRequest } from '@fortawesome/free-solid-svg-icons';
import "./Figure.css";



const Figure = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countUsers, setCountUsers] = useState();
    const [countPosts, setCountPosts] = useState();
    const [countPostsRequest, setCountPostsRequest] = useState();
    const [countDocuments, setCountDocument] = useState();


    const getDataCountUserApi = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8000/api/user/getCount")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("dataCountUser----", result);
                    setIsLoaded(true);
                    setCountUsers(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }
    const getDataCountPostsApi = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8000/api/post/getCount")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("dataCountPost----", result);
                    setIsLoaded(true);
                    setCountPosts(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }
    const getDataCountPostsRequestApi = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8000/api/post/getCountRequest")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("dataCountPostRequest----", result);
                    setIsLoaded(true);
                    setCountPostsRequest(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }
    // const getDataCountDocumentApi = () => {
    //     setIsLoaded(true);
    //     axios.get("http://127.0.0.1:8000/api/document/getCount")
    //         .then(res => res.data)
    //         .then(
    //             (result) => {
    //                 console.log("dataCountPostRequest----", result);
    //                 setIsLoaded(true);
    //                 setCountDocument(result);
    //
    //                 // console.log("items---", items);
    //             },
    //
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }
    useEffect(() => {
        getDataCountUserApi();
        getDataCountPostsApi();
        getDataCountPostsRequestApi();
        // getDataCountDocumentApi()

    }, [])




    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
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
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{countUsers}</div>
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
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{countPosts}</div>
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
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">4</div>
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
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{countPostsRequest}</div>
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


}
export default Figure;
