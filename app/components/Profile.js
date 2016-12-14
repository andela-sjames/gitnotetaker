import React, { Component } from 'react';
import { Router } from 'react-router';

import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';
import Rebase from 're-base';

const base = Rebase.createClass('https://simplenotesapp-b88dd.firebaseio.com/')


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: ['notes 1'],
            bio: { name: 'samue james' },
            repos: [1, 3, 6]
        }
    }

    componentDidMount() {
        this.init(this.props.routeParams.username)
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    init(username) {
        this.ref = base.bindToState(username, {
            context: this,
            asArray: true,
            state: 'notes'
        })
    }

    handleAddNote(newNote) {
        base.post(this.props.routeParams.username, {
            data: this.state.notes.concat([newNote])
        })
    }

    render() {

        let username = this.props.routeParams.username;

        return (
            <div className="Row">

                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio} />
                </div>

                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos} />
                </div>

                <div className="col-md-4">
                    <Notes 
                    username={this.props.params.username}
                    notes={this.state.notes}
                    addNote={(newNote) => this.handleAddNote(newNote)} />
                </div>

            </div>
        )
    }
}

export default Profile;
