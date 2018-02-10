import React from 'react';
import {connect} from "react-redux";
import LeftComponent from "../components/LeftComponent";
import {ShowAction} from "../actions/Action";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    showFunc: ShowAction
};

const lcComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftComponent);

export default lcComponent;