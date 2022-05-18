import React from 'react'
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";



function App( props ){

    return (
        <div className="App d-flex w-100">
            <Sidebar/>
            <Main/>
        </div>
    )
}

export default App
