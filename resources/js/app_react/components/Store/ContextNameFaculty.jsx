import {useState, createContext} from "react";

const NameFaculty = createContext();

const PageProvider = ({children}) => {

    const [nameFaculty, setNameFaculty] = useState('');

    const changeNameFaculty = (data) => {
        setNameFaculty(data);
    }



    const value = {
        nameFaculty,
        changeNameFaculty
    }
    return (
        <NameFaculty.Provider value={value}>
            {children}
        </NameFaculty.Provider>

    )
}
export {NameFaculty, PageProvider}
