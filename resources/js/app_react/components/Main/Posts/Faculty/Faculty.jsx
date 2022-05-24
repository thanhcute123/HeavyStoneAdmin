import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import Title from '../Title/Title';
import './Faculty.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointRight} from "@fortawesome/free-solid-svg-icons";
import {NameFaculty} from "../../../Store/ContextNameFaculty";
const Faculty = () => {

    const context = useContext(NameFaculty);

    const [faculty, setFaculty] = useState([]);
    const [nameFaculty, setNameFaculty] = useState('');
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    const getDataFaculty = () => {
        axios.get("http://127.0.0.1:8000/api/department/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("faculty----", result);
                    setIsLoaded(true);
                    setFaculty(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    const change_nameFaculty = (data) => {
      context.changeNameFaculty(data)
      // console.log("name_faculty----", nameFaculty);
    }

    useEffect(() => {
        getDataFaculty();
    }, [])
  return(
      <div className="posts">
          <div className="row row-cols-1 g-4">
              <div>
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                      <h1 className="h3 mb-0 text-gray-800 ml-3">Faculty</h1>
                  </div>
              </div>
              {faculty.map((faculty, idx) => (
                  <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card border-left-info shadow h-100 py-2">
                          <div className="card-body height-120">
                              <h6 className="card-title">{faculty.name_department}</h6>
                              <a href="#/posts" onClick={() => {change_nameFaculty(faculty.name_department)}} className="text-info icon-more"><FontAwesomeIcon icon={faHandPointRight}/></a>
                          </div>
                      </div>
                  </div>
              ))}
          </div>

      </div>

  )
}
export default Faculty
