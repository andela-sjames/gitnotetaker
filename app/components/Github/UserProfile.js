import React, {Component, PropTypes} from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    render() {
        return (
            <div>
                USER PROFILE <br/>
                Username: {this.props.username} <br/>
                bio: 
            </div>
        );
    }
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    bio: PropTypes.object.isRequired
};

export default UserProfile;