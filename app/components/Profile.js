import React, { Component } from 'react';
import { Router } from 'react-router';

import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: ['notes 1'],
            bio: {name: 'samue james'},
            repos:[1,3,6]
        }
    }

    mixins() {
        return [Router.state]
    }

    render () {

        let username = this.props.routeParams.username;
        console.log(this);

        return (
            <div className="Row">

                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio} />
                </div>

                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos}/>
                </div>

                <div className="col-md-4">
                    <Notes username={username} notes={this.state.notes}/>
                </div>
                
            </div>
        )
    }
}

export default Profile;