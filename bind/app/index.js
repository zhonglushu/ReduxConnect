import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import LeftContainer from "./container/LeftContainer";
import RightContainer from "./container/RightContainer";
import {Provider} from "react-redux";
import Reducer from "./reducers/Reducer";
import Test from "./test/test";

function PageContent() {
    Test();
    return (<div>
        <LeftContainer />
        <RightContainer />
    </div>);
}

const store = createStore(Reducer);

ReactDOM.render(<Provider store={store}>
    <PageContent/>
    </Provider>,
    document.getElementById('root'));