import React from 'react';
import { connect } from "react-redux";

const SongDetail = ({ mySelectedSong }) => {
    if(!mySelectedSong) {
        return <div>Select a song</div>
    }

    return (
        <div>
            <h3>Song details:</h3>
            <p>
                Title: {mySelectedSong.title}
                <br/>
                Duration: {mySelectedSong.duration}
            </p>
        </div>
    )
};

const mapStateToProp = (state) => {
    return { mySelectedSong: state.selectedSong }
};

export default connect(mapStateToProp)(SongDetail);