import React from 'react'
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import Signin from "./Signin/Signin";



function App( props ){

    return (
        <div className="App d-flex w-100">
            <Sidebar/>
            <Main/>
            {/*<Signin/>*/}
        </div>
    )
}

export default App
