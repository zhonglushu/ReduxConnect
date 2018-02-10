import React from 'react';
import PropTypes from 'prop-types';

class LeftComponent extends React.Component {

    constructor(props) {
        super(props);
        this.clickEvent = this.clickEvent.bind(this);
        this.changeEvent = this.changeEvent.bind(this);
    }

    clickEvent(event) {
        event.preventDefault();
        console.log("LeftComponent clickEvent this.input.value = " + this.input.value + ", this.props.showFunc = " + this.props.showFunc);
        this.props.showFunc(this.input.value);
    }

    changeEvent(event) {

    }

    render() {
        return (<form onSubmit={this.clickEvent}>
                    <input type="text" ref={(node) => {this.input = node;}}/>
                    <button type="submit">button</button>
                </form>);
    }
}

LeftComponent.propTypes = {
    showFunc: PropTypes.func.isRequired
};

export default LeftComponent;