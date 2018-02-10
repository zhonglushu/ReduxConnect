import React from 'react';
import PropTypes from 'prop-types';

class RightComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value : props.showText};
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("RightComponent componentWillReceiveProps = " + nextProps.showText);
        this.setState({value : nextProps.showText});
    }

    render() {
        console.log("RightComponent this.state.value = " + this.state.value);
        return (
            <div>
                <label>{this.state.value}</label>
            </div>
        );
    }

}

RightComponent.propTypes = {
    showText:PropTypes.string.isRequired
};

export default RightComponent;