import React from 'react'
import ReactDOM from 'react-dom'
import {PageProvider} from "./components/Store/ContextNameFaculty";
import App from "../app_react/components/App"
import {HashRouter as Router} from "react-router-dom";


    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <PageProvider>
                    <App />
                </PageProvider>
            </Router>
        </React.StrictMode>
        , document.getElementById('application'))
