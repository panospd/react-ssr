import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default ChildComponent => {
    class RequireAuth extends Component {
        render() {
            switch (this.props.auth) {
                case false:
                    return <Redirect to="/" />;
                case null:
                    return <Redirect>Loading...</Redirect>;
                default:
                    return <ChildComponent {...this.props} />;
            }
        }
    }

    function mapsStateToProps({ auth }) {
        return { auth };
    }

    return connect(mapsStateToProps)(RequireAuth);
};
