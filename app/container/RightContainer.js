import React from 'react';
import {connect} from "react-redux";
import RightComponent from "../components/RightComponent";

const mapStateToProps = (state) => ({
    showText: state == undefined? "" : state.text
});

const rcComponent = connect(
    mapStateToProps
)(RightComponent);

export default rcComponent;