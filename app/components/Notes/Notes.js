import React, {Component, PropTypes} from 'react';

class Notes extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                USER NOTES <br />
                Username: {this.props.username} <br/>
                notes: {this.props.notes}
            </div>
        );
    }
}

Notes.propTypes = {

};

export default Notes;