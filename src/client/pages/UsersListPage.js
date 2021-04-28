import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends Component {
    componentDidMount() {
        console.log("called!!!");
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }

    render() {
        return (
            <div>
                Here is a big list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

const loadData = store => {
    return store.dispatch(fetchUsers());
};

export default {
    component: connect(mapStateToProps, { fetchUsers })(UsersList),
    loadData
};
