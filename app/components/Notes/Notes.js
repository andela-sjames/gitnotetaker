import React, {Component, PropTypes} from 'react';

import NotesList from './NotesList';
import AddNote from './AddNote';

class Notes extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                USER NOTES <br />
                <h3> Notes for {this.props.username} </h3>
                <AddNote username={this.props.username} addNote={this.props.addNote} />
                <NotesList notes={this.props.notes} />
            </div>
        );
    }
}

Notes.propTypes = {
    username: PropTypes.string.isRequired,
    notes: PropTypes.array.isRequired,
    addNote: PropTypes.func.isRequired,
};

export default Notes;