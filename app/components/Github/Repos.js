import React, {Component, PropTypes} from 'react';

class Repos extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                REPOS <br />
                Username: {this.props.username} <br/>
                repos: {this.props.repos}
            </div>
        );
    }
}

Repos.propTypes = {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
};

export default Repos;