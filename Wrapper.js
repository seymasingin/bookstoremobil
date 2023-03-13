import React from "react";
import App from "./App";
import { store } from './src/store'
import { Provider } from 'react-redux'

export default () => {
    return(
        <Provider store= {store}>
            <App/>
        </Provider>
    )
}