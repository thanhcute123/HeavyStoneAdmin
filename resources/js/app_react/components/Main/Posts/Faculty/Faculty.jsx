import React, {useState, useEffect} from "react";
import axios from "axios";
import './Faculty.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointRight} from "@fortawesome/free-solid-svg-icons";
const Faculty = () => {

    const [faculty, setFaculty] = useState([]);
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

    useEffect(() => {
        getDataFaculty();
    }, [])
  return(
      <div className="row row-cols-1 g-4">
          {faculty.map((faculty, idx) => (
              <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-info shadow h-100 py-2">
                      <div className="card-body height-120">
                          <h6 className="card-title">{faculty.name_department}</h6>
                          <a href="#" className="text-info icon-more"><FontAwesomeIcon icon={faHandPointRight}/></a>
                      </div>
                  </div>
              </div>
          ))}
      </div>

  )
}
export default Faculty
